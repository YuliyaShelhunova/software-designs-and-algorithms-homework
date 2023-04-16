export class Node<T> {
  val: T;
  priority: number;

  constructor(val: T, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}
