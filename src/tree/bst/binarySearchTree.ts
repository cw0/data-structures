import TreeInterface from './tree.interface';
import Node from './node';

export default class BinarySearchTree implements TreeInterface {
  root: Node;

  insert(value: number, node: Node): void {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    if (!node) {
      node = this.root;
    }

    if (value > node.value) {
      if (node.right) {
        this.insert(value, node.right);
      } else {
        node.right = new Node(value);
      }
    }

    if (value <= node.value) {
      if (node.left) {
        this.insert(value, node.left);
      } else {
        node.left = new Node(value);
      }
    }
  }

  find(value: number, root: Node = this.root): Node {
    if (!root) return undefined;
    if (root.value === value) return root;
    if (value < root.value) {
      return this.find(value, root.left);
    }
    return this.find(value, root.right);
  }

  remove(value: number): number {
    const toBeRemoved = this.find(value);
    if (!toBeRemoved) return undefined;

  }

  preOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }

  inOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }

  postOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }
}
