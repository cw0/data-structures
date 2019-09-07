class AdjacencyMatrix {
  constructor () {
    this.graph = [];
    this.vertices = new Map();
    this.verticesList = new Map();
    this.insert.bind(this);
    this.remove.bind(this);
    this.getEdge.bind(this);
    this.getEdges.bind(this);
  }

  //insert a pair of vertices with a weight
  insert (u, v, w) {
    let uIndex, vIndex;
    //check if u exists
    if (!this.vertices.has(u)) {
      uIndex = this.graph.length;
      this.vertices.set(u, uIndex);
      this.verticesList.set(uIndex, u);

      this.graph.push([]);
    } else {
      uIndex = this.vertices.get(u);
    }

    //check if v exist
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
      return;
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

const am = new AdjacencyMatrix();
const alice = { name: 'alice' };
const bob = { name: 'bob'};
const chris = { name: 'chris'};
const david = { name: 'david'};

am.insert (alice, bob, 2);
am.insert (alice, chris, 1);
am.insert (bob, chris, 5)

am.graph.forEach((vertex) => {
  console.log(vertex);
});

console.log('alice -> bob: ', am.getEdge(alice, bob));
console.log('david -> alice: ', am.getEdge(david, alice));

console.log('alice getEdges: ', am.getEdges(alice));
console.log('david getEdges: ', am.getEdges(david));

am.remove(bob);
am.graph.forEach((vertex) => {
  console.log(vertex);
});