interface Node {
  value: number;
}

interface Edge {
  weight: number;
}

interface Graph {
  graph: Edge[][];
  vertices: Map<string, Node>;
  verticesList: Map<string, Node>;
  insert: (u: Node, v: Node, w: number) => void;
  remove: (u: Node) => Node;
  getEdge: (u: Node, v: Node) => Edge;
  getEdges: (u: Node) => Array<Edge>;
  getVertices: () => Array<Node>;
  getVertex: (value: number) => Node;
  addVertex: (v: Node) => void;
  addEdge: (u: Node, v: Node, w: number) => void;
}

class AdjacencyMatrix implements Graph {
  graph: Edge[][] = [];
  vertices: Map<string, Node> = new Map<string, Node>();
  verticesList: Map<string, Node> = new Map<string, Node>();
  insert(u: Node, v: Node, w: number) {

  }

  remove(u: Node): Node {

  }

  getEdge(u: Node, v: Node): Edge {

  }

  getEdges(u: Node): Edge[] {

  }

  getVertices(): Node[] {

  }

  getVertex(value: number): Node {

  }

  addVertex(v: Node) {

  }

  addEdge(u: Node, v: Node, w: number) {

  }

  constructor(): AdjacencyMatrix {  };
};

export AdjacencyMatrix;