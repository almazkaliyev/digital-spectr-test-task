import React from 'react';
import { useDispatch } from 'react-redux';

import { useClickOutside } from '../hooks/useClickOutside';
import { closeDeleteModal, deleteTodoItem } from '../store/todo/actionCreators';
import Button from './Button';

const TodoDeleteDialog: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const handleConfirm = () => dispatch(deleteTodoItem());
  const handleClose = () => dispatch(closeDeleteModal());

  useClickOutside(dialogRef, handleClose);

  return (
    <div className="modal" ref={dialogRef}>
      <div className="modal__content">
        <p>Are you sure to delete this element?</p>
        <div className="modal__actions">
          <Button color="secondary" onClick={handleConfirm}>
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoDeleteDialog;
