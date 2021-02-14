/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
import { Todo } from '../../store/todo/contracts/state';

export const getNewId = (): string => Math.random().toString(36).substr(2);

export const sortTodoByCompleted = (items: Todo[]): Todo[] =>
  ([] as Todo[])
    .concat(items)
    .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

// mutate data
export const addTodoDeeply = (data: Todo[], todo: Todo): void => {
  if (todo.parentId) {
    (function func(arr) {
      for (const elem of arr) {
        if (elem.id === todo.parentId) {
          elem.subItems.push(todo);
        } else if (elem.subItems) {
          func(elem.subItems);
        }
      }
    })(data);
  } else {
    data.push(todo);
  }
};

// mutate data
export const removeTodoDeeply = (data: Todo[], id: string): void => {
  (function func(arr) {
    for (const elem of arr) {
      if (elem.id === id) {
        const index = arr.findIndex((item) => item.id === id);
        arr.splice(index, 1);
      } else if (elem.subItems) {
        func(elem.subItems);
      }
    }
  })(data);
};

// TODO: DRY
// mutate data
export const toggleTodoDeeply = (data: Todo[], id: string): void => {
  (function func(arr) {
    for (const elem of arr) {
      if (elem.id === id) {
        elem.completed = !elem.completed;
        // toggle child
        if (elem.subItems) {
          (function foo(ar, value) {
            for (const e of ar) {
              e.completed = value;
              if (e.subItems) {
                for (const b of e.subItems) {
                  b.completed = value;
                }
              }
            }
          })(elem.subItems, elem.completed);
        }
      } else if (elem.subItems) {
        func(elem.subItems);
      }
    }
  })(data);
};
