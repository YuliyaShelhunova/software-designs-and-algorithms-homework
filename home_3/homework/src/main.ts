import {
  Either,
  fromPromise,
  ap,
  right,
  getOrElse,
  flatten,
  left,
} from "./fp/either";
import { pipe } from "./fp/utils";
import { sort } from "./fp/array";
import { fetchClient, fetchExecutor } from "./fetching";
import { ClientUser, Demand, ExecutorUser } from "./types";
import { fold, fromNullable, isSome, none, some } from "./fp/maybe";
import { Ord, ordNumber, revert } from "./fp/ord";
import { distance } from "./utils";

type Response<R> = Promise<Either<string, R>>;

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> =>
  fromPromise(
    fetchClient().then((res) =>
      res.map((item) => {
        return {
          ...item,
          demands: fromNullable(item.demands),
        };
      })
    )
  );

export enum SortBy {
  distance = "distance",
  reward = "reward",
}

const ordClientUserByReward: Ord<ClientUser> = {
  equals: (x: ClientUser, y: ClientUser) => ordNumber.equals(x.reward, y.reward),
  compare: (x: ClientUser, y: ClientUser) => ordNumber.compare(x.reward, y.reward),
};

const ordClientUserByDistance = (executor: ExecutorUser): Ord<ClientUser> => {
  const d = (u: ClientUser) => distance(u.position, executor.position);

  return {
    equals: (x: ClientUser, y: ClientUser) => ordNumber.equals(d(x), d(y)),
    compare: (x: ClientUser, y: ClientUser) => ordNumber.compare(d(x), d(y)),
  };
};

const sortByDistance = (executor: ExecutorUser, clients: Array<ClientUser>): Array<ClientUser> => sort(ordClientUserByDistance(executor))(clients);

const sortByRemardDesc = (clients: Array<ClientUser>): Array<ClientUser> => sort(revert(ordClientUserByReward))(clients);

export const show =
  (sortBy: SortBy) =>
  (clients: Array<ClientUser>) =>
  (executor: ExecutorUser): Either<string, string> => {
    const sortingMessage =
      sortBy === SortBy.distance ? "distance to executor" : "highest reward";
    let clientsDem = clients
      .map((item: ClientUser) =>
        fold(
          () => some(item),
          (values: Demand[]) => values.every((value: Demand) => executor.possibilities.includes(value))
            ? some(item)
            : none
        )(item.demands)
      )
      .filter(isSome)
      .map(some => some.value);
    clientsDem =
      sortBy == SortBy.distance
        ? sortByDistance(executor, clientsDem)
        : sortByRemardDesc(clientsDem);
    const countDemands = clientsDem.reduce(
      (acc, value: ClientUser) => acc + (value ? 1 : 0),
      0
    );

    if (countDemands === 0) {
      return left("This executor cannot meet the demands of any client!");
    }
    let message =
      countDemands === clients.length
        ? "This executor meets all demands of all clients!"
        : `This executor meets the demands of only ${countDemands} out of ${clients.length} clients`;
    message = clientsDem.reduce(
      (acc, item) =>
        acc +
        `\nname: ${item.name}, distance: ${distance(
          item.position,
          executor.position
        )}, reward: ${item.reward}`,
      message + `\n\nAvailable clients sorted by ${sortingMessage}:`
    );
    return right(message);
  };

export const main = (sortBy: SortBy): Promise<string> =>
  Promise.all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) =>
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse((err) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      )
    );
