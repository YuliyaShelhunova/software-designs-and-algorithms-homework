import { IDijkstra } from "./dijkstra.interface";
import { Graph } from "./graph";
import { IPath } from "./path.interface";
import { PriorityQueue } from "./PriorityQueue";
import { Vertex } from "./vertex";

export class Dijkstra<T extends Vertex> implements IDijkstra<T> {
  adjacencyList = {};
  vertices: T[];

  constructor(graph: Graph<T>) {
    this.adjacencyList = graph.adjacencyList;
    this.vertices = graph.vertices;
  }

  findShortestPath(start: T, finish: T): IPath {
    const queue = new PriorityQueue();
    const { distances, previousItem } = this.init(start, queue);
    let path: any = [];
    let node: string;

    while (!queue.isEmpty()) {
      node = queue.dequeue().val;

      if (node === finish.value && distances[finish.value] !== Infinity) {
        while (previousItem[node]) {
          path.push(node);
          node = previousItem[node];
        }
        path.push(node);

        return {
          path: path.reverse(),
          distance: distances[finish.value],
        };
      }
      this.relaxMethod(node, distances, previousItem, queue);
    }

    return {
      path: [],
      distance: distances[finish.value],
    }; // empty
  }

  findAllShortestPaths(start: T): Record<string, IPath> {
    const queue = new PriorityQueue();
    const { distances, previousItem } = this.init(start, queue);
    const records = {};
    let node: string;

    while (!queue.isEmpty()) {
      node = queue.dequeue().val;
      this.relaxMethod(node, distances, previousItem, queue);
    }

    this.vertices
      .filter((item) => item !== start)
      .forEach((item) => {
        const path: string[] = [];
        if (distances[item.value] !== Infinity) {
          // path exists
          let from = item.value;
          while (previousItem[from]) {
            path.push(from);
            from = previousItem[from];
          }
          path.push(from);
        }

        records[item.value] = {
          path: path.reverse(),
          distance: distances[item.value],
        };
      });

    return records;
  }

  private relaxMethod(node: string, distances: any, previousItem: any, queue: PriorityQueue) {
    if (node || distances[node] !== Infinity) {
      for (let neighbor in this.adjacencyList[node]) {
        let nextNode = this.adjacencyList[node][neighbor];
        let candidate = distances[node] + nextNode.weight;
        let nextNeighbor = nextNode.nextNode;

        if (candidate < distances[nextNeighbor]) {
          distances[nextNeighbor] = candidate;
          previousItem[nextNeighbor] = node;
          queue.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }

  private init(start: T, queue: PriorityQueue) {
    const distances = {};
    const previousItem = {};
    for (let vertex in this.adjacencyList) {
      if (vertex === start.value) {
        queue.enqueue(vertex, 0);
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previousItem[vertex] = null;
    }
    return { distances, previousItem };
  }
}
