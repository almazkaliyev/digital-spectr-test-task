import React from 'react';

import classNames from 'classnames';

import { Todo } from '../store/todo/contracts/state';
import { IconButton } from './IconButton';
import CompletedIcon from './icons/CompletedIcon';
import DeleteIcon from './icons/DeleteIcon';
import UncompletedIcon from './icons/UncompletedIcon';

interface TodoListItemProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onComplete: (todo: Todo) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onDelete,
  onComplete,
}): React.ReactElement => (
  <li
    className={classNames('todo__list-item', {
      'todo__list-item--completed': todo.completed,
    })}
  >
    <div className="todo__list-item-icon">
      <IconButton color="primary" onClick={() => onComplete(todo)}>
        {todo.completed ? <CompletedIcon /> : <UncompletedIcon />}
      </IconButton>
    </div>
    <p className="todo__list-item-text">{todo.text}</p>
    <div className="todo__list-item-icon">
      <IconButton
        color="secondary"
        disabled={!todo.completed}
        onClick={() => onDelete(todo)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  </li>
);

export default TodoListItem;
