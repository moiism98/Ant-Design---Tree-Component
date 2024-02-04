export interface Node {
  title: string;
  key: string;
  children?: Node[];
}

export interface OnDragNode {
  title: string;
  key: string;
  children: {
    title: string;
    key: string;
    children: {
      title: string;
      key: string;
      children: {
        title: string;
        key: string;
        children: never[];
      }[];
    }[];
  }[];
}

export interface DragNDrop {
  outChildren: boolean;
  dropNode: OnDragNode;
  dragNode: OnDragNode;
  dropPosition: string;
  dragPosition: string;
}
