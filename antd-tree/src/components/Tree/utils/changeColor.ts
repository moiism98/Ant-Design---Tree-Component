import type { Node } from '@/interfaces/interfaces';
const changeColor = (
  node: Node[],
  key: string,
  setColor: React.Dispatch<React.SetStateAction<string>>,
) => {
  node.map((childNode) => {
    document
      .getElementById(childNode.key)
      ?.parentElement?.parentElement?.classList.add('add-color');
    setColor('start');
    if (childNode.children) {
      return changeColor(childNode.children, key, setColor);
    } else return node;
  });
};

export default changeColor;
