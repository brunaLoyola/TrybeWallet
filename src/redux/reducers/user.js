import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userEmail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { email: action.email };
  default:
    return state;
  }
};

export default userEmail;
