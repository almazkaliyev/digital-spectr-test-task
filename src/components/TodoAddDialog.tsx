import React from 'react';
import { useDispatch } from 'react-redux';

import { useClickOutside } from '../hooks/useClickOutside';
import { addTodoItem, closeAddModal } from '../store/todo/actionCreators';
import { Todo } from '../store/todo/contracts/state';
import { getNewId } from '../utils/helpers';
import Button from './Button';

interface TodoAddDialogProps {
  options: Todo[];
}

const TodoAddDialog: React.FC<TodoAddDialogProps> = ({
  options,
}): React.ReactElement => {
  const [textInputValue, setTextInputValue] = React.useState('');
  const [parentId, setParentId] = React.useState('none');
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    const todo: Todo = {
      id: getNewId(),
      text: textInputValue.trim(),
      completed: false,
      subItems: [],
    };
    if (parentId !== 'none') {
      todo.parentId = parentId;
    }
    dispatch(addTodoItem(todo));
  };

  const handleClose = () => dispatch(closeAddModal());

  useClickOutside(dialogRef, handleClose);

  return (
    <div className="modal" ref={dialogRef}>
      <div className="modal__content">
        <p>Add deliciuos todo</p>
        <div className="form-group">
          <label htmlFor="todo-parent">Parent:</label>
          <select
            id="todo-parent"
            onChange={(e) => setParentId(e.target.value)}
            value={parentId}
          >
            <option value="none">---</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="todo-text">Text:</label>
          <input
            id="todo-text"
            onChange={(e) => setTextInputValue(e.target.value)}
            type="text"
            value={textInputValue}
          />
        </div>
        <div className="modal__actions">
          <Button
            color="primary"
            disabled={!textInputValue.trim().length}
            onClick={handleConfirm}
          >
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoAddDialog;
