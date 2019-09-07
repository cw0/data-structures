const AdjacencyMatrix = require('../adjacencyMatrix');

let am = new AdjacencyMatrix();
const alice = { name: 'alice' };
const bob = { name: 'bob'};
const chris = { name: 'chris'};
const david = { name: 'david'};

am.insert (alice, bob, 2);
am.insert (alice, chris, 1);
am.insert (bob, chris, 5)

test(('TESTS ARE WORKING'), () => {
  expect(true).toBeTruthy();
});

console.log('alice -> bob: ', am.getEdge(alice, bob));
console.log('david -> alice: ', am.getEdge(david, alice));

console.log('alice getEdges: ', am.getEdges(alice));
console.log('david getEdges: ', am.getEdges(david));

am.remove(bob);
am.graph.forEach((vertex) => {
  console.log(vertex);
});