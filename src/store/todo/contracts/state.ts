export interface TodoItems {
  [prop: string]: Todo;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  parentId?: string;
}

export interface TodoState {
  items: TodoItems;
  subItems1: TodoItems;
  subItems2: TodoItems;
  currentItem: Todo;
  showAddModal: boolean;
  showDeleteModal: boolean;
}
