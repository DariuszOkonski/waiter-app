const tablesReducer = (startPart = [], action) => {
  switch (action.type) {
    default:
      return startPart;
  }
};

export default tablesReducer;

// selectors
export const getAllTables = (state) => state.tables;

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;

// actions creators
