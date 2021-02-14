import React from 'react';
import { useDispatch } from 'react-redux';

import { useClickOutside } from '../hooks/useClickOutside';
import { addTodoItem, closeAddModal } from '../store/todo/actionCreators';
import { getNewId } from '../utils/helpers';
import Button from './Button';

const TodoAddDialog: React.FC = (): React.ReactElement => {
  const [textInputValue, setTextInputValue] = React.useState('');
  const dispatch = useDispatch();
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const handleConfirm = () =>
    dispatch(
      addTodoItem({
        id: getNewId(),
        text: textInputValue.trim(),
        completed: false,
        subItems: [],
        // TODO: add parent selection
        // parentId?
      })
    );

  const handleClose = () => dispatch(closeAddModal());

  useClickOutside(dialogRef, handleClose);

  return (
    <div className="modal" ref={dialogRef}>
      <div className="modal__content">
        <p>Add new deliciuos todo</p>
        <div className="form-group">
          <label htmlFor="todo-parent">Parent:</label>
          <input id="todo-parent" type="text" />
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
