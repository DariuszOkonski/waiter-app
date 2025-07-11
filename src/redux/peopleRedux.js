const peopleReducer = (startPart = {}, action) => {
  switch (action.type) {
    case UPDATE_PEOPLE:
      return { ...action.payload };
    default:
      return startPart;
  }
};

export default peopleReducer;

// selectors
export const getPeople = (state) => state.people;

// actions
const createActionName = (actionName) => `app/people/${actionName}`;
const UPDATE_PEOPLE = createActionName('UPDATE_PEOPLE');

// actions creators
export const updatePeople = (payload) => ({ type: UPDATE_PEOPLE, payload });
