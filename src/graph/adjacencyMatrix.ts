interface Node {
  value: number;
}

interface Edge {
  weight: number;
}

interface Graph {
  graph: Array<string>;
  vertices: Record<string, Node>;
  verticesList: Record<string, Node>;
  insert: (u: Node, v: Node, w: number) => void;
  remove: (u: Node) => Node;
  getEdge: (u: Node, v: Node) => Edge;
  getEdges: (u: Node) => Array<Edge>;
  getVertices: () => Array<Node>;
  getVertex: (value: number) => Node;
  addVertex: (v: Node) => void;
  addEdge: (u: Node, v: Node, w: number) => void;
}
