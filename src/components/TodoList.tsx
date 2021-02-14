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
}

const TodoList: React.FC<TodoListProps> = ({ items }): React.ReactElement => {
  const dispatch = useDispatch();

  const handleCompleteItem = (todo: Todo) => dispatch(toggleTodoItem(todo));
  const handleDeleteItem = (todo: Todo) =>
    dispatch(deleteTodoItemRequest(todo));

  return (
    <ul className="todo__list">
      {items &&
        items.map((item) => (
          <React.Fragment key={item.id}>
            <TodoListItem
              onComplete={handleCompleteItem}
              onDelete={handleDeleteItem}
              todo={item}
            />
            {item.subItems && <TodoList items={item.subItems} />}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default TodoList;
