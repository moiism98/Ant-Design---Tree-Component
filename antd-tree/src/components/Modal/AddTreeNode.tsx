import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormGroup, ProFormText } from '@ant-design/pro-components';
import useTree from '@/hooks/useTree';
const AddTreeNode = () => {
  const { setName } = useTree();
  return (
    <>
      <ModalForm
        trigger={<PlusOutlined style={{ paddingTop: 5, color: 'rgb(124 179 5)' }} />}
        title="Añadir un nuevo elemento"
        onFinish={async (values) => {
          setName(values.name);
          return true;
        }}
        modalProps={{
          destroyOnClose: true,
        }}
      >
        <ProFormGroup>
          <ProFormText label="Nombre" name="name" placeholder="Introduce el nombre del nodo" />
        </ProFormGroup>
      </ModalForm>
    </>
  );
};

export default AddTreeNode;
