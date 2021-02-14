import { combineReducers } from 'redux';

import todo from './todo/reducer';

export const rootReducer = combineReducers({
  todo,
});

export type RootState = ReturnType<typeof rootReducer>;
