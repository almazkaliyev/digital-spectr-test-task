export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  subItems: Todo[];
  parentId?: string;
}

export interface TodoState {
  items: Todo[];
  currentItem: Todo;
  showAddModal: boolean;
  showDeleteModal: boolean;
}
