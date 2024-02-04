import { EditOutlined } from '@ant-design/icons';
import { Tree, Typography } from 'antd';
import useTree from '@/hooks/useTree';
import AddTreeNode from '../Modal/AddTreeNode';
import RemoveTreeNode from '../Modal/RemoveTreeNode';
import './Tree.css';
const { Paragraph } = Typography;
const TreeAnt = () => {
  const { treeData, setNodeKey, setText, setDrag } = useTree();

  return (
    <div className="container">
      <Tree
        treeData={treeData}
        style={{ backgroundColor: 'rgb(240 242 245)' }}
        titleRender={(tree) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Paragraph
                editable={{
                  onChange: (evt) => setText(evt),
                  enterIcon: false,
                  icon: (
                    <EditOutlined
                      onClick={(evt) => setNodeKey(evt.currentTarget.id)}
                      id={tree.key.toString()}
                      className="menu-icons hide"
                    />
                  ),
                }}
                style={{ margin: 0 }}
                onMouseEnter={() => setNodeKey(tree.key)}
                onMouseLeave={() => setNodeKey('')}
              >
                {tree.title}
              </Paragraph>
              <span
                id={tree.key.toString()}
                className="menu-icons hide"
                onMouseEnter={() => setNodeKey(tree.key)}
                onMouseLeave={() => setNodeKey('')}
              >
                <AddTreeNode />
                {<RemoveTreeNode />}
              </span>
            </div>
          );
        }}
        defaultExpandAll
        draggable = {{icon: false}}
        onDrop={(info) => 
          setDrag({ outChildren: info.dropToGap, dropNode: info.node, dragNode: info.dragNode, dropPosition: info.node.pos, dragPosition: info.dragNode.pos})
        }
      />
    </div>
  );
};

export default TreeAnt;
