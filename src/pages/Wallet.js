import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { expenseAction, fetchCurrencies } from '../actions/index';
import Table from '../components/Table';

const INIT_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = { ...INIT_STATE };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { currencieAction } = this.props;
    currencieAction();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id } = this.state;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const { expenseObject } = this.props;
    const itemExpenses = { ...this.state, exchangeRates: data };
    expenseObject(itemExpenses);
    this.setState({ ...INIT_STATE, id: id + 1 });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <section>
        <Header />
        <label htmlFor="priceInput">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            id="priceInput"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="descriptionInput"
            name="description"
            value={ description }
            placeholder="Descreva aqui..."
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="coinInput">
          Moeda:
          <select
            id="coinInput"
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((element, index) => (
              <option key={ index } value={ element }>{ element }</option>
            ))}
          </select>
        </label>
        <label htmlFor="paymentInput">
          Método de pagamento:
          <select
            id="paymentInput"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tagInput">
          Tag:
          <select
            id="tagInput"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
        <Table />
      </section>
    );
  }
}

Wallet.propTypes = {
  currencieAction: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseObject: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => wallet;

const mapDispatchToProps = (dispatch) => ({
  currencieAction: () => dispatch(fetchCurrencies()),
  expenseObject: (value) => dispatch(expenseAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
