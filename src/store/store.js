import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { reducers } from "../RootReducers/rootReducer";

const store = (
  window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore
)(reducers);

export default store;
