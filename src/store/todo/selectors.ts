/* eslint-disable no-nested-ternary */
import { sortTodoByCompleted } from '../../utils/helpers';
import { RootState } from '../rootReducer';
import { Todo, TodoState } from './contracts/state';

export const selectTodo = (state: RootState): TodoState => state.todo;

export const selectItems = (state: RootState): Todo[] =>
  selectTodo(state).items;

// TODO: sort nested children
export const selectSortedItems = (state: RootState): Todo[] =>
  sortTodoByCompleted(selectItems(state));

export const selectShowDeleteModal = (state: RootState): boolean =>
  selectTodo(state).showDeleteModal;

export const selectShowAddModal = (state: RootState): boolean =>
  selectTodo(state).showAddModal;
