import { CURRENCIE_ACTION } from '../actions/index';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIE_ACTION:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export default wallet;
