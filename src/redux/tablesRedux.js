const tablesReducer = (startPart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: {
      return [...action.payload];
    }
    default:
      return startPart;
  }
};

export default tablesReducer;

// selectors
export const getAllTables = (state) => state.tables;
export const getSingleTable = (state, id) =>
  state.tables.find((table) => table.id === id);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// actions creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
