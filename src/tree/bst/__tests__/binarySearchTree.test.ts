import BinarySearchTree from '../binarySearchTree';

let bst: BinarySearchTree;

describe('A binary search tree...', () => {
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('should insert sorted elements in the shape of a singly linked list', () => {
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);

    expect(bst.root.value).toBe(1);
    expect(bst.root.left).toBeUndefined();
    expect(bst.root.right.value).toBe(2);
    expect(bst.root.right.left).toBeUndefined();
    expect(bst.root.right.right.value).toBe(3);
  });

  it('should insert an unsorted list and form the expected shape', () => {
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(2.5);

    expect(bst.root.value).toBe(2);
    expect(bst.root.left.value).toBe(1);
    expect(bst.root.right.value).toBe(3);
    expect(bst.root.right.left.value).toBe(2.5);
  });
});
