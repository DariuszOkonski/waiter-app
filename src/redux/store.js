import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState } from './initialState';
import tablesReducer from './tablesRedux';
import statusesReducer from './statusesRedux';
import peopleReducer from './peopleRedux';

const subReducers = {
  tables: tablesReducer,
  statuses: statusesReducer,
  people: peopleReducer,
};

const reducer = combineReducers(subReducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
