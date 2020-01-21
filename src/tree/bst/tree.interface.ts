import NodeInterface from './node.interface';

export default interface Tree {
  root: NodeInterface;
  insert(value: number, node: NodeInterface): void;
  remove(value: number): number;
  preOrderTraversal(): void;
  inOrderTraversal(): void;
  postOrderTraversal(): void;
}
