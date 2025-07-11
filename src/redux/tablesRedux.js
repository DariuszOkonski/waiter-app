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

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// actions creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((res) => res.json())
      .then((tables) => {
        dispatch(updateTables(tables));
      });
  };
};
