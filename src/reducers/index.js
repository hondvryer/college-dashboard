import {
    combineReducers
  } from 'redux';
import { dashboard } from './dashboard';
  
export const rootReducer = combineReducers({
    /* your app’s top-level reducers */
    dashboard
});
