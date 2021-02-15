/* eslint-disable no-nested-ternary */
import { Todo } from '../../store/todo/contracts/state';

export const getNewId = (): string => Math.random().toString(36).substr(2);

export const sortTodoByCompleted = (items: Todo[]): Todo[] =>
  ([] as Todo[])
    .concat(items)
    .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
