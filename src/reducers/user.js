import { SUBMITE_ACTION } from '../actions/index';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMITE_ACTION:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
