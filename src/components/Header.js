import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    const total = expenses.length < 1 ? 0 : expenses
      .map((element) => (element.exchangeRates[element.currency]
        .ask) * Number(element.value))
      .reduce((acc, curr) => acc + curr, 0).toFixed(2);
    return (
      <div>
        <h1>TrybeWallet</h1>
        <br />
        <div data-testid="email-field">
          {email}
        </div>
        <br />
        <span data-testid="total-field">{ total }</span>
        <br />
        <div data-testid="header-currency-field">
          BRL
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
