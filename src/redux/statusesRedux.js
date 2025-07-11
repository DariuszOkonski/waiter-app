const statusesReducer = (startPart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUSES:
      return [...action.payload];
    default:
      return startPart;
  }
};

export default statusesReducer;

// selectors
export const getAllStatuses = (state) => state.statuses;

// actions
const createActionName = (actionName) => `app/statuses/${actionName}`;
const UPDATE_STATUSES = createActionName('UPDATE_STATUSES');

// actions creators
export const updateStatuses = (payload) => ({ type: UPDATE_STATUSES, payload });
