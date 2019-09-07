const AdjacencyMatrix = require('../adjacencyMatrix');

const am = new AdjacencyMatrix();
const alice = { name: 'alice' };
const bob = { name: 'bob' };
const chris = { name: 'chris' };
const david = { name: 'david' };

describe(('the graph should insert vertices correctly'), () => {
  am.insert(alice, bob, 2);
  am.insert(alice, chris, 1);
  am.insert(bob, chris, 5);
  test(('it should have 3 vertices'), () => {
    expect(am.getVertices().length).toBe(3);
  });
});
