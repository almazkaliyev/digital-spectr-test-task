/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openAddModal } from '../store/todo/actionCreators';
import {
  selectShowAddModal,
  selectShowDeleteModal,
  selectSortedItems,
} from '../store/todo/selectors';
import { IconButton } from './IconButton';
import AddIcon from './icons/AddIcon';
import Modal from './Modal';
import TodoAddDialog from './TodoAddDialog';
import TodoDeleteDialog from './TodoDeleteDialog';
import TodoList from './TodoList';

const TodoBlock: React.FC = (): React.ReactElement => {
  const items = useSelector(selectSortedItems);
  const dispatch = useDispatch();
  const showDeleteModal = useSelector(selectShowDeleteModal);
  const showAddModal = useSelector(selectShowAddModal);

  return (
    <>
      <div className="todo">
        <div className="todo__header">
          <h4 className="todo__title">Great things</h4>
          <IconButton color="primary" onClick={() => dispatch(openAddModal())}>
            <AddIcon />
          </IconButton>
        </div>
        <div className="todo__content">
          {items.length ? (
            <TodoList items={items} />
          ) : (
            <p className="quote">
              &quot;Big things have small beginnings.&quot; - Prometheus
            </p>
          )}
        </div>
      </div>
      {showAddModal && (
        <Modal>
          <TodoAddDialog />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal>
          <TodoDeleteDialog />
        </Modal>
      )}
    </>
  );
};

export default TodoBlock;
