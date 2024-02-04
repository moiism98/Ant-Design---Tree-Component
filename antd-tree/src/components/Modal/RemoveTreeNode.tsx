import { DeleteOutlined } from '@ant-design/icons';
import { ModalForm, ProFormGroup, ProFormCheckbox } from '@ant-design/pro-components';
import useTree from '@/hooks/useTree';
const RemoveTreeNode = () => {
  const { setRemoveChildNode } = useTree();
  return (
    <>
      <ModalForm
        trigger={<DeleteOutlined style={{ paddingTop: 5, color: 'rgb(124 179 5)' }} />}
        title="¿Estás seguro de que quieres eliminar éste nodo?"
        onFinish={async (values) => {
          if (values.removeChilds) {
            setRemoveChildNode('yes');
          } else setRemoveChildNode('no');
          return true;
        }}
        modalProps={{
          destroyOnClose: true,
        }}
      >
        <ProFormGroup>
          <ProFormCheckbox
            style={{ display: 'flex', flexDirection: 'row' }}
            name="removeChilds"
            label="¿Eliminar hijos del nodo?"
          />
        </ProFormGroup>
      </ModalForm>
    </>
  );
};

export default RemoveTreeNode;
