import { Vertex } from "./vertex";

export class Edge {
  from: Vertex;
  to: Vertex;
  weight: number;

  constructor(from: Vertex, to: Vertex, value: number) {
    this.from = from;
    this.to = to;
    this.weight = value;
  }
}
