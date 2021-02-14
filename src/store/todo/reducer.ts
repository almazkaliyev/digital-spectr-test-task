/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import {
  addTodoDeeply,
  removeTodoDeeply,
  toggleTodoDeeply,
} from '../../utils/helpers';
import { TodoActions, TodoActionTypes } from './actionCreators';
import { Todo, TodoState } from './contracts/state';

const initialState: TodoState = {
  items: [],
  currentItem: {} as Todo,
  showAddModal: false,
  showDeleteModal: false,
};

export default produce(
  (draftState: Draft<TodoState>, action: TodoActions): void => {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO_ITEM:
        draftState.showAddModal = false;
        addTodoDeeply(draftState.items, action.payload);
        break;

      case TodoActionTypes.DELETE_TODO_ITEM_REQUEST:
        draftState.showDeleteModal = true;
        draftState.currentItem = action.payload;
        break;

      case TodoActionTypes.DELETE_TODO_ITEM: {
        removeTodoDeeply(draftState.items, draftState.currentItem.id);
        draftState.showDeleteModal = false;
        draftState.currentItem = {} as Todo;
        break;
      }

      case TodoActionTypes.TOGGLE_TODO_ITEM: {
        toggleTodoDeeply(draftState.items, action.payload.id);
        break;
      }

      case TodoActionTypes.OPEN_ADD_MODAL:
        draftState.showAddModal = true;
        break;

      case TodoActionTypes.CLOSE_ADD_MODAL:
        draftState.showAddModal = false;
        break;

      case TodoActionTypes.CLOSE_DELETE_MODAL:
        draftState.showDeleteModal = false;
        break;

      default:
        break;
    }
  },
  initialState
);
