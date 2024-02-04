import { useCallback, useContext, useState, useEffect } from 'react';
import { Context } from '@/context/TreeContext';
import editTree from '@/components/Tree/utils/editTree';
import type { DragNDrop } from '@/interfaces/interfaces';
import dragTreeNode from '@/components/Tree/utils/dragTreeNode';
import dropTreeNode from '@/components/Tree/utils/dropTreeNode';

const useTree = () => {
  const { name, setName, removeChildNode, setRemoveChildNode, color, setColor }: any =
    useContext(Context);

  const [treeData, setTreeData] = useState([
    {
      title: 'Animals',
      key: '1',
      children: [
        {
          title: 'Vertebrates',
          key: '1-0',
          children: [
            {
              title: 'Amphibian',
              key: '1-0-0',
              children: [
                {
                  title: 'Frog',
                  key: '1-0-0-0',
                  children: [],
                },
                {
                  title: 'Salamander',
                  key: '1-0-0-1',
                  children: [],
                },
                {
                  title: 'Axolotl',
                  key: '1-0-0-2',
                  children: [],
                },
              ],
            },
            {
              title: 'Reptile',
              key: '1-0-1',
              children: [
                {
                  title: 'Crocodile',
                  key: '1-0-1-0',
                  children: [],
                },
                {
                  title: 'Turtle',
                  key: '1-0-1-1',
                  children: [],
                },
                {
                  title: 'Lizard',
                  key: '1-0-1-2',
                  children: [],
                },
                {
                  title: 'Chameleon',
                  key: '1-0-1-3',
                  children: [],
                },
                {
                  title: 'Komodo Dragon',
                  key: '1-0-1-4',
                  children: [],
                },
              ],
            },
            {
              title: 'Fish',
              key: '1-0-2',
              children: [
                {
                  title: 'Eel',
                  key: '1-0-2-0',
                  children: [],
                },
                {
                  title: 'Shark',
                  key: '1-0-2-1',
                  children: [],
                },
                {
                  title: 'Clownfish',
                  key: '1-0-2-2',
                  children: [],
                },
                {
                  title: 'Tuna',
                  key: '1-0-2-3',
                  children: [],
                },
              ],
            },
            {
              title: 'Bird',
              key: '1-0-3',
              children: [
                {
                  title: 'Duck',
                  key: '1-0-3-0',
                  children: [],
                },
                {
                  title: 'Pigeon',
                  key: '1-0-3-1',
                  children: [],
                },
              ],
            },
            {
              title: 'Mammal',
              key: '1-0-4',
              children: [
                {
                  title: 'Cat',
                  key: '1-0-4-0',
                  children: [],
                },
                {
                  title: 'Whales',
                  key: '1-0-4-1',
                  children: [],
                },
                {
                  title: 'Human',
                  key: '1-0-4-2',
                  children: [],
                },
                {
                  title: 'Bat',
                  key: '1-0-4-3',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: 'Invertebrates',
          key: '1-1',
          children: [
            {
              title: 'Mollusc',
              key: '1-1-0',
              children: [
                {
                  title: 'Clams',
                  key: '1-1-0-0',
                  children: [],
                },
                {
                  title: 'Oysters',
                  key: '1-1-0-1',
                  children: [],
                },
              ],
            },
            {
              title: 'Worm',
              key: '1-1-1',
              children: [
                {
                  title: 'Annelid',
                  key: '1-1-1-0',
                  children: [],
                },
                {
                  title: 'Nematode',
                  key: '1-1-1-1',
                  children: [],
                },
              ],
            },
            {
              title: 'Echinoderm',
              key: '1-1-2',
              children: [
                {
                  title: 'Sea Star',
                  key: '1-1-2-0',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Music',
      key: '2',
      children: [
        {
          title: 'Genre',
          key: '2-0',
          children: [
            {
              title: 'Indie',
              key: '2-0-0',
              children: [
                {
                  title: 'Ari Abdul',
                  key: '2-0-0-0',
                  children: [],
                },
                {
                  title: 'Imagine Dragons',
                  key: '2-0-0-1',
                  children: [],
                },
                {
                  title: 'Lana del Rey',
                  key: '2-0-0-2',
                  children: []
                },
              ],
            },
            {
              title: 'Pop',
              key: '2-0-1',
              children: [
                {
                  title: 'Ariana Grande',
                  key: '2-0-1-0',
                  children: [],
                },
                {
                  title: 'Justin Bieber',
                  key: '2-0-1-1',
                  children: [],
                },
                {
                  title: 'Britney Spears',
                  key: '2-0-1-2',
                  children: [],
                },
              ],
            },
            {
              title: 'Hip Hop',
              key: '2-0-2',
              children: [
                {
                  title: 'Eminem',
                  key: '2-0-2-0',
                  children: []
                },
                {
                  title: '50 Cent',
                  key: '2-0-2-1',
                  children: []
                },
                {
                  title: 'Nicki Minaj',
                  key: '2-0-2-3',
                  children: []
                },
                {
                  title: 'Drake',
                  key: '2-0-2-4',
                  children: []
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const [nodeKey, setNodeKey] = useState<string>();
  const [text, setText] = useState<string>('');
  const [drag, setDrag] = useState<DragNDrop>();


  const handleIcons = useCallback(() => {
    const icons = document.querySelectorAll('.menu-icons');
    icons.forEach((icon) => {
      if (icon.id === nodeKey) icon.classList.remove('hide');
      else icon.classList.add('hide');
    });
  }, [nodeKey]);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleColor = () => {
    document
      .querySelectorAll('.add-color')
      .forEach(
        (element) => (
          element.classList.add('restart-color'), element.classList.remove('add-color')
        ),
      );
    setColor('');
  };


  const removeColorAnimation = () => {
    document
      .querySelectorAll('.restart-color')
      .forEach((element) => element.classList.remove('restart-color'));
  };


  useEffect(() => {
    if (color === 'start') {
      setTimeout(handleColor, 2500);
    }
    setTimeout(removeColorAnimation, 1500); //Quita la clase de animación para que al hacer cambios en el árbol no vuelva a ejecutarse
  }, [color, setColor, handleColor]);


  useEffect(() => {
    if (drag) {
      const treeCopy = treeData.map((data) => data);
      dragTreeNode(treeCopy, drag);
      dropTreeNode(treeCopy, drag);
      setTreeData(treeCopy);
      setDrag(undefined);
    }
  }, [drag, treeData]);

  
  useEffect(() => {
    if ((text || name || removeChildNode) && nodeKey) {
      const treeCopy = treeData.map((data) => data);
      editTree(treeCopy, nodeKey, text, name, removeChildNode, setText, setColor);
      setTreeData(treeCopy);
      setName('');
      setRemoveChildNode('');
    }
    handleIcons();
  }, [
    treeData,
    nodeKey,
    text,
    name,
    removeChildNode,
    setName,
    setRemoveChildNode,
    setColor,
    handleIcons,
  ]);

  return {
    name,
    setName,
    removeChildNode,
    setRemoveChildNode,
    treeData,
    setNodeKey,
    setText,
    setTreeData,
    setDrag,
  };
};

export default useTree;
