import { MaxViewWidget } from './../actions/MaxViewWidget';
import {
    combineReducers
  } from 'redux';

function maxViewWidget (
    state = null,
    action
  ) {
    switch (action.type) {
    case MaxViewWidget.typeName():
      return action.payload;
    default:
      return state;
    }
  }

  export const dashboard = combineReducers({
    maxViewWidget
  });
  