const tablesReducer = (startPart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: {
      return [...action.payload];
    }
    case UPDATE_SINGLE_TABLE: {
      return [
        ...startPart.map((table) =>
          table.id !== action.payload.id
            ? table
            : {
                ...table,
                ...action.payload,
              }
        ),
      ];
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
const UPDATE_SINGLE_TABLE = createActionName('UPDATE_SINGLE_TABLE');

// actions creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const updateSingleTableStore = (payload) => ({
  type: UPDATE_SINGLE_TABLE,
  payload,
});
