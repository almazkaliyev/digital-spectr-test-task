/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openAddModal } from '../store/todo/actionCreators';
import {
  selectOptions,
  selectShowAddModal,
  selectShowDeleteModal,
  selectSortedByCompletedItems,
  selectSortedByCompletedSubItems1,
  selectSortedByCompletedSubItems2,
} from '../store/todo/selectors';
import { IconButton } from './IconButton';
import AddIcon from './icons/AddIcon';
import Modal from './Modal';
import TodoAddDialog from './TodoAddDialog';
import TodoDeleteDialog from './TodoDeleteDialog';
import TodoList from './TodoList';

const TodoBlock: React.FC = (): React.ReactElement => {
  const items = useSelector(selectSortedByCompletedItems);
  const subItems1 = useSelector(selectSortedByCompletedSubItems1);
  const subItems2 = useSelector(selectSortedByCompletedSubItems2);
  const options = useSelector(selectOptions);
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
            <TodoList
              items={items}
              subItems1={subItems1}
              subItems2={subItems2}
            />
          ) : (
            <p className="quote">
              &quot;Big things have small beginnings.&quot; - Prometheus
            </p>
          )}
        </div>
      </div>
      {showAddModal && (
        <Modal>
          <TodoAddDialog options={options} />
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
