import { combineReducers, createStore } from 'redux';
import { initialState } from './initialState';
import peopleReducer from './peopleRedux';
import statusesReducer from './statusesRedux';
import tablesReducer from './tablesRedux';

const subReducers = {
  tables: tablesReducer,
  statuses: statusesReducer,
  people: peopleReducer,
};

const reducer = combineReducers(subReducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
