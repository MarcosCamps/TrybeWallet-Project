// Coloque aqui suas actions
export const SUBMITE_ACTION = 'SUBMITE_ACTION';
export const CURRENCIE_ACTION = 'CURRENCIE_ACTION';
export const EXPENSE_ACTION = 'EXPENSE_ACTION';
export const TOTAL_ACTION = 'TOTAL_ACTION';

export const submiteAction = (email) => (
  {
    type: SUBMITE_ACTION,
    email,
  });

export const expenseAction = (expenses) => (
  {
    type: EXPENSE_ACTION,
    expenses,
  });

export const totalAction = (total) => (
  {
    type: TOTAL_ACTION,
    total,
  });

export const currencieAction = (currencies) => (
  {
    type: CURRENCIE_ACTION,
    currencies,
  });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currenciesFetch = Object.keys(data).filter((el) => el !== 'USDT');
  dispatch(currencieAction(currenciesFetch));
};

export const fetchPrice = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(expenseAction(data));
};
