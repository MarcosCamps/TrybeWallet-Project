import { CURRENCIE_ACTION, EXPENSE_ACTION, TOTAL_ACTION } from '../actions/index';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_ACTION:
    return { ...state, total: action.total };
  case CURRENCIE_ACTION:
    return { ...state, currencies: action.currencies };
  case EXPENSE_ACTION:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
};

export default wallet;
