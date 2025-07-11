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

export const fetchPeople = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/people')
      .then((res) => res.json())
      .then((people) => dispatch(updatePeople(people)));
  };
};
