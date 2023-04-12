// @ts-nocheck

import { Dijkstra } from "./dijkstra";
import { Edge } from "./edge";
import { Graph } from "./graph";
import { Vertex } from "./vertex";

describe("PriorityQueue", () => {
  let vertices = [];
  let edges = [];
  let graph: Graph;
  let vertex1: Vertex;
  let vertex2: Vertex;
  let vertex3: Vertex;
  let vertex4: Vertex;
  let vertex5: Vertex;

  beforeEach(() => {
    vertex1 = new Vertex("1");
    vertex2 = new Vertex("2");
    vertex3 = new Vertex("3");
    vertex4 = new Vertex("4");
    vertex5 = new Vertex("5");

    vertices = [vertex1, vertex2, vertex3, vertex4, vertex5];

    edges = [
      new Edge(vertex1, vertex4, 3),
      new Edge(vertex1, vertex2, 5),
      new Edge(vertex1, vertex3, 4),
      new Edge(vertex2, vertex4, 6),
      new Edge(vertex2, vertex3, 5),
    ];

    graph = new Graph();
    vertices.forEach((verticle) => graph.addVertex(verticle));
    edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));
  });

  it("should execute the algorithm for (vertex3, vertex4)", () => {
    const dijkstra = new Dijkstra(graph);

    const obj = dijkstra.findShortestPath(vertex3, vertex4);

    const expectedObj = { path: ["3", "1", "4"], distance: 7 };
    expect(obj).toEqual(expectedObj);
  });

  it("should execute the algorithm for (vertex1, vertex5)", () => {
    const dijkstra = new Dijkstra(graph);

    const obj = dijkstra.findShortestPath(vertex1, vertex5);

    const expectedObj = { path: [], distance: Infinity };
    expect(obj).toEqual(expectedObj);
  });

  it("should execute the algorithm for (vertex1, vertex1)", () => {
    const dijkstra = new Dijkstra(graph);

    const obj = dijkstra.findShortestPath(vertex1, vertex1);

    const expectedObj = { path: ["1"], distance: 0 };
    expect(obj).toEqual(expectedObj);
  });

  it("should execute the algorithm for all paths", () => {
    const dijkstra = new Dijkstra(graph);

    const obj = dijkstra.findAllShortestPaths(vertex4);

    const expected = {
      '1': { path: ['4', '1'], distance: 3 },
      '2': { path: ['4', '2'], distance: 6 },
      '3': { path: ['4', '1', '3'], distance: 7 },
      '5': { path: [], distance: Infinity }
    };
    expect(obj).toEqual(expected);
  });
});
