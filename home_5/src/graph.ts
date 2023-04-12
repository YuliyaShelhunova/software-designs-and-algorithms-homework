import { Vertex } from "./vertex";
import { IWeightedGraph } from "./weightedGraph.interface";

export class Graph<T extends Vertex> implements IWeightedGraph<T> {
  adjacencyList = {};
  vertices: T[] = [];

  constructor() {}

  addVertex(vertex: T): void {
    this.vertices.push(vertex);
    if (!this.adjacencyList[vertex.value]) {
      this.adjacencyList[vertex.value] = [];
    }
  }
  addEdge(vertex1: T, vertex2: T, weight: number): void {
    this.adjacencyList[vertex1.value].push({ nextNode: vertex2.value, weight: weight });
    this.adjacencyList[vertex2.value].push({ nextNode: vertex1.value, weight: weight });
  }
}
