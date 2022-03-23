import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

export const reducers = combineReducers({
  form: formReducer,
});
