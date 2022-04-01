import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencieAction } = this.props;
    currencieAction();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <section>
        <Header />
        <label htmlFor="priceInput">
          Valor:
          <input
            data-testid="value-input"
            type="text"
            id="priceInput"
            name="price"
            placeholder="Digite o valor aqui..."
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="descriptionInput"
            name="description"
            placeholder="Descreva aqui..."
          />
        </label>
        <label htmlFor="coinInput">
          Moeda:
          <select
            id="coinInput"
            data-testid="currency-input"
            name="coin"
          >
            {currencies.map((coin, index) => (
              <option key={ index } value={ coin }>{ coin }</option>
            ))}
          </select>
        </label>
        <label htmlFor="paymentInput">
          Método de pagamento:
          <select
            id="paymentInput"
            data-testid="method-input"
            name="payment"
          >
            <option value="money">Dinheiro</option>
            <option value="credCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tagInput">
          Tag:
          <select
            id="tagInput"
            data-testid="tag-input"
            name="tag"
          >
            <option value="food">Alimentação</option>
            <option value="timeOff">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </section>
    );
  }
}

Wallet.propTypes = {
  currencieAction: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => wallet;

const mapDispatchToProps = (dispatch) => ({
  currencieAction: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
