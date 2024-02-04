import type { Node, DragNDrop } from '@/interfaces/interfaces';
const dragTreeNode = (node: Node[], dragDrop: DragNDrop) => {
  const toRemoveIndex = node.findIndex((leaf) => leaf.key === dragDrop.dragNode.key);
  if (toRemoveIndex === -1) {
    node.forEach((leaf) => {
      if (leaf.children) dragTreeNode(leaf.children, dragDrop);
    });
    return;
  }
  node.splice(toRemoveIndex, 1);
  return node;
};

export default dragTreeNode;
