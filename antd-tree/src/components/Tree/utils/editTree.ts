import type { Node } from '@/interfaces/interfaces';
import { random } from 'lodash';
import changeColor from './changeColor';
const editTree = (
  node: Node[],
  key: string,
  text: string,
  name: string,
  removeChilds: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  setColor: React.Dispatch<React.SetStateAction<string>>,
) => {
  const selectedNode = node.find((leaf) => leaf.key === key);
  const index = node.findIndex((leaf) => leaf === selectedNode);
  if (selectedNode) {
    if (text !== '') {
      selectedNode.title = text;
      setText('');
    }
    if (name !== '') {
      selectedNode.children?.push({
        title: name,
        key: random(1, 1000000).toString(),
        children: [],
      });
    }
    if (removeChilds !== '') {
      node.splice(index, 1);
      if (removeChilds != 'yes' && selectedNode.children) {
        changeColor(selectedNode.children, key, setColor);
        node.unshift(...selectedNode.children); // selectedNode.children?.map((child) => node.push(child)) (Éstas líneas hacen lo mismo)
      }
    }
    return node;
  } else {
    node.forEach((leaf) => {
      if (leaf.children) editTree(leaf.children, key, text, name, removeChilds, setText, setColor);
    });
    return;
  }
};

export default editTree;
