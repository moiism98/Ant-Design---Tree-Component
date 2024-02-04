import { TreeContext } from '@/context/TreeContext';
import TreeAnt from '@/components/Tree/TreeAnt';
import './Tree.css';
const TreePage = () => {
  return (
    <TreeContext>
      <TreeAnt />
    </TreeContext>
  );
};

export default TreePage;
