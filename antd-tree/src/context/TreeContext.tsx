import { createContext, useState } from 'react';

export const Context = createContext({});

export const TreeContext = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('');
  const [removeChildNode, setRemoveChildNode] = useState('');
  const [color, setColor] = useState('');
  return (
    <Context.Provider
      value={{
        name,
        setName,
        removeChildNode,
        setRemoveChildNode,
        color,
        setColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};
