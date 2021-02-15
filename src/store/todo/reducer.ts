/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { TodoActions, TodoActionTypes } from './actionCreators';
import { Todo, TodoState } from './contracts/state';

const initialState: TodoState = {
  items: {},
  subItems1: {},
  subItems2: {},
  currentItem: {} as Todo,
  showAddModal: false,
  showDeleteModal: false,
};

export default produce(
  (draftState: Draft<TodoState>, action: TodoActions): void => {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO_ITEM: {
        if (action.payload.parentId) {
          if (draftState.items[action.payload.parentId]) {
            draftState.subItems1[action.payload.id] = action.payload;
          } else {
            draftState.subItems2[action.payload.id] = action.payload;
          }
        } else {
          draftState.items[action.payload.id] = action.payload;
        }
        draftState.showAddModal = false;
        break;
      }

      case TodoActionTypes.DELETE_TODO_ITEM_REQUEST:
        draftState.showDeleteModal = true;
        draftState.currentItem = action.payload;
        break;

      case TodoActionTypes.DELETE_TODO_ITEM: {
        const { id, parentId } = draftState.currentItem;
        if (parentId) {
          if (draftState.subItems1[id]) {
            for (const subItem2 of Object.values(draftState.subItems2)) {
              if (subItem2.parentId === id) {
                delete draftState.subItems2[subItem2.id];
              }
            }
            delete draftState.subItems1[id];
          }
          if (draftState.subItems2[id]) {
            delete draftState.subItems2[id];
          }
        } else {
          for (const subItem1 of Object.values(draftState.subItems1)) {
            if (subItem1.parentId === id) {
              for (const subItem2 of Object.values(draftState.subItems2)) {
                if (subItem2.parentId === subItem1.id) {
                  delete draftState.subItems2[subItem2.id];
                }
              }
              delete draftState.subItems1[subItem1.id];
            }
          }
          delete draftState.items[id];
        }
        draftState.showDeleteModal = false;
        draftState.currentItem = {} as Todo;
        break;
      }

      // FIXME: toggle parents when all children complete/uncomplete
      case TodoActionTypes.TOGGLE_TODO_ITEM: {
        const { id, parentId } = action.payload;
        if (parentId) {
          if (draftState.subItems1[id]) {
            draftState.subItems1[id].completed = !draftState.subItems1[id].completed;
            for (const subItem2 of Object.values(draftState.subItems2)) {
              if (subItem2.parentId === id) {
                draftState.subItems2[subItem2.id].completed = draftState.subItems1[id].completed;
              }
            }
          }
          if (draftState.subItems2[id]) {
            draftState.subItems2[id].completed = !draftState.subItems2[id].completed;
          }
        } else {
          draftState.items[id].completed = !draftState.items[id].completed;
          for (const subItem1 of Object.values(draftState.subItems1)) {
            if (subItem1.parentId === id) {
              draftState.subItems1[subItem1.id].completed = draftState.items[id].completed;
              for (const subItem2 of Object.values(draftState.subItems2)) {
                if (subItem2.parentId === subItem1.id) {
                  draftState.subItems2[subItem2.id].completed = draftState.items[id].completed;
                }
              }
            }
          }
        }
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
