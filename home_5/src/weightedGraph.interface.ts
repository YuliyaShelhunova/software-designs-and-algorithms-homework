export interface IWeightedGraph<T> {
    addVertex(key: T): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
}