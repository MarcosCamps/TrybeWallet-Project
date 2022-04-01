// Coloque aqui suas actions
export const SUBMITE_ACTION = 'SUBMITE_ACTION';

export const submiteAction = (email) => (
  {
    type: SUBMITE_ACTION,
    email,
  });
