import NodeInterface from './node.interface';

export default class Node implements NodeInterface {
  left?: NodeInterface;

  right?: NodeInterface;

  constructor(public value: number) { }
}
