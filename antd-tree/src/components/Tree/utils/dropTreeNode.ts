import type { Node, DragNDrop } from '@/interfaces/interfaces';
const dropTreeNode = (node: Node[], dragDrop: DragNDrop) => {
  const dragNode: Node = {
    key: dragDrop.dragNode.key,
    title: dragDrop.dragNode.title,
    children: dragDrop.dragNode.children,
  };
  const toAddIndex = node.findIndex((leaf) => leaf.key === dragDrop.dropNode.key);
  const dropNodePositionLength = dragDrop.dropPosition.split('-').length - 1;
  const dropPosition = Number(dragDrop.dropPosition.split('-')[dropNodePositionLength]);
  if (toAddIndex === -1) {
    node.forEach((leaf) => {
      if (leaf.children) dropTreeNode(leaf.children, dragDrop);
    });
    return;
  }
  if (!dragDrop.outChildren) {
    /*
        COLOCAR UN NODO EN LA PRIMERA POSICIÓN CON RESPECTO A SU PADRE
        Si el indice donde añadir es mayor o igual a la posicion dónde suelto el nodo
        Añades el nodo en la primera posicion del padre directamente, 
        sino lo sueltas en la posición correspondiente
    */
    if (toAddIndex <= dropPosition) node[toAddIndex].children?.splice(0, 0, dragNode);
    else node[toAddIndex].children?.splice(dropPosition, 0, dragNode);
  } else {
    /*
        Mover nodo de abajo a arriba, le sumas 1 cuando la posicion del nodo y dónde los sueltas es la misma,
        con ésto consigues que el nodo puedas soltarlo encima y no entre el nodo que quieres mover y en 
        dónde lo quieres mover.
    */
    if (toAddIndex !== dropPosition) node.splice(dropPosition, 0, dragNode);
    else node.splice(dropPosition + 1, 0, dragNode); // Por defecto lo colocas dónde quieres soltarlo (Mover de arriba a abajo).
  }
  return node;
};

export default dropTreeNode;
