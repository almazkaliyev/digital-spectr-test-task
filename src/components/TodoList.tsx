import React from 'react';
import { useDispatch } from 'react-redux';

import {
  deleteTodoItemRequest,
  toggleTodoItem,
} from '../store/todo/actionCreators';
import { Todo } from '../store/todo/contracts/state';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  items: Todo[];
  subItems1: Todo[];
  subItems2: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  subItems1,
  subItems2,
}): React.ReactElement => {
  const dispatch = useDispatch();

  const handleCompleteItem = (todo: Todo) => dispatch(toggleTodoItem(todo));
  const handleDeleteItem = (todo: Todo) =>
    dispatch(deleteTodoItemRequest(todo));

  // TODO: DRY
  return (
    <ul className="todo__list">
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <TodoListItem
            onComplete={handleCompleteItem}
            onDelete={handleDeleteItem}
            todo={item}
          />
          <ul className="todo__list">
            {subItems1
              .filter((subItem1) => subItem1.parentId === item.id)
              .map((subItem1) => (
                <React.Fragment key={subItem1.id}>
                  <TodoListItem
                    onComplete={handleCompleteItem}
                    onDelete={handleDeleteItem}
                    todo={subItem1}
                  />
                  <ul className="todo__list">
                    {subItems2
                      .filter((subItem2) => subItem2.parentId === subItem1.id)
                      .map((subItem2) => (
                        <React.Fragment key={subItem2.id}>
                          <TodoListItem
                            onComplete={handleCompleteItem}
                            onDelete={handleDeleteItem}
                            todo={subItem2}
                          />
                        </React.Fragment>
                      ))}
                  </ul>
                </React.Fragment>
              ))}
          </ul>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default TodoList;
