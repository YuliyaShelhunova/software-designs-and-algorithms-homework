export interface Comparator<T> {
  compare(other: T): number;
}
