import { sortTodoByCompleted } from '../../utils/helpers';
import { RootState } from '../rootReducer';
import { Todo, TodoState } from './contracts/state';

export const selectTodo = (state: RootState): TodoState => state.todo;

export const selectItems = (state: RootState): Todo[] =>
  Object.values(selectTodo(state).items);

export const selectSubItems1 = (state: RootState): Todo[] =>
  Object.values(selectTodo(state).subItems1);

export const selectSubItems2 = (state: RootState): Todo[] =>
  Object.values(selectTodo(state).subItems2);

export const selectShowDeleteModal = (state: RootState): boolean =>
  selectTodo(state).showDeleteModal;

export const selectShowAddModal = (state: RootState): boolean =>
  selectTodo(state).showAddModal;

export const selectOptions = (state: RootState): Todo[] =>
  selectItems(state).concat(selectSubItems1(state));

export const selectSortedByCompletedItems = (state: RootState): Todo[] =>
  sortTodoByCompleted(selectItems(state));

export const selectSortedByCompletedSubItems1 = (state: RootState): Todo[] =>
  sortTodoByCompleted(selectSubItems1(state));

export const selectSortedByCompletedSubItems2 = (state: RootState): Todo[] =>
  sortTodoByCompleted(selectSubItems2(state));
