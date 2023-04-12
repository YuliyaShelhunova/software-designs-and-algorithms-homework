import { IPath } from "./path.interface";

export interface IDijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): IPath;
  findAllShortestPaths(vertex: T): Record<string, IPath>;
}
