import { Action } from 'redux';

import { Todo } from './contracts/state';

export enum TodoActionTypes {
  ADD_TODO_ITEM = 'todo/ADD',
  DELETE_TODO_ITEM_REQUEST = 'todo/DELETE_REQUEST',
  DELETE_TODO_ITEM = 'todo/DELETE',
  TOGGLE_TODO_ITEM = 'todo/TOGGLE',
  OPEN_ADD_MODAL = 'todo/modal/OPEN_ADD',
  CLOSE_ADD_MODAL = 'todo/modal/CLOSE_ADD',
  CLOSE_DELETE_MODAL = 'todo/modal/CLOSE_DELETE',
}

interface AddTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.ADD_TODO_ITEM;
  payload: Todo;
}

interface DeleteTodoItemRequestAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.DELETE_TODO_ITEM_REQUEST;
  payload: Todo;
}

interface DeleteTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.DELETE_TODO_ITEM;
}

interface ToggleTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.TOGGLE_TODO_ITEM;
  payload: Todo;
}

interface OpenAddModalAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.OPEN_ADD_MODAL;
}

interface CloseAddModalAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.CLOSE_ADD_MODAL;
}

interface CloseDeleteModalAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.CLOSE_DELETE_MODAL;
}

export const addTodoItem = (payload: Todo): AddTodoItemAction => ({
  type: TodoActionTypes.ADD_TODO_ITEM,
  payload,
});

export const deleteTodoItemRequest = (
  payload: Todo
): DeleteTodoItemRequestAction => ({
  type: TodoActionTypes.DELETE_TODO_ITEM_REQUEST,
  payload,
});

export const deleteTodoItem = (): DeleteTodoItemAction => ({
  type: TodoActionTypes.DELETE_TODO_ITEM,
});

export const toggleTodoItem = (payload: Todo): ToggleTodoItemAction => ({
  type: TodoActionTypes.TOGGLE_TODO_ITEM,
  payload,
});

export const openAddModal = (): OpenAddModalAction => ({
  type: TodoActionTypes.OPEN_ADD_MODAL,
});

export const closeAddModal = (): CloseAddModalAction => ({
  type: TodoActionTypes.CLOSE_ADD_MODAL,
});

export const closeDeleteModal = (): CloseDeleteModalAction => ({
  type: TodoActionTypes.CLOSE_DELETE_MODAL,
});

export type TodoActions =
  | AddTodoItemAction
  | DeleteTodoItemRequestAction
  | DeleteTodoItemAction
  | ToggleTodoItemAction
  | OpenAddModalAction
  | CloseAddModalAction
  | CloseDeleteModalAction;
