class AdjacencyMatrix {
  constructor() {
    this.graph = [];
    this.vertices = new Map();
    this.verticesList = new Map();
    this.insert.bind(this);
    this.remove.bind(this);
    this.getEdge.bind(this);
    this.getEdges.bind(this);
    this.getVertices.bind(this);
    this.getVertex.bind(this);
  }

  // insert a pair of vertices with a weight
  insert(u, v, w) {
    let uIndex; let
      vIndex;
    // check if u exists
    if (!this.vertices.has(u)) {
      uIndex = this.graph.length;
      this.vertices.set(u, uIndex);
      this.verticesList.set(uIndex, u);

      this.graph.push([]);
    } else {
      uIndex = this.vertices.get(u);
    }

    // check if v exist
    if (!this.vertices.has(v)) {
      vIndex = this.graph.length;
      this.vertices.set(v, vIndex);
      this.verticesList.set(vIndex, v);

      this.graph.push([]);
    } else {
      vIndex = this.vertices.get(v);
    }

    this.graph[uIndex][vIndex] = w;
  }

  // TODO finish me
  addVertex(v) {
    if (!this.vertices.has(v)) {
      const vIndex = this.graph.length;
      this.vertices.set(v, vIndex);
      this.verticesList.set(vIndex, v);

      this.graph.push([]);
      this.graph.map((edgeList) => edgeList.push(undefined));
    }
  }

  // TODO finish me & refactor insert to use this helper
  addEdge(u, v, w) {

  }

  getVertex(name) {
    const verticesArray = Array.from(this.vertices);
    const found = verticesArray.filter((vertex) => vertex.name === name);
    if (found && found.length > 0) {
      return found[0];
    }
  }

  getVertices() {
    return Array.from(this.vertices);
  }

  remove(u) {
    const uIndex = this.vertices.get(u);

    this.graph.splice(uIndex, 1);
    this.graph.map((v) => {
      if (typeof v[uIndex] !== 'undefined') {
        v.splice(uIndex, 1);
      }
    });
    this.vertices.delete(u);
    this.verticesList.delete(uIndex);
  }

  getEdge(u, v) {
    const uIndex = this.vertices.get(u);
    const vIndex = this.vertices.get(v);

    try {
      return this.graph[uIndex][vIndex];
    } catch (err) {

    }
  }

  getEdges(u) {
    const uIndex = this.vertices.get(u);

    if (typeof uIndex === 'undefined') {
      return;
    }

    const edges = new Map();

    this.graph[uIndex].reduce((accumulator, w, index) => {
      if (w) {
        accumulator.set(this.verticesList.get(index), w);
      }
      return accumulator;
    }, edges);

    return edges;
  }
}

module.exports = AdjacencyMatrix;
