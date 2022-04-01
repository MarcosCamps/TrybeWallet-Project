import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <br />
        <div data-testid="email-field">
          {email}
        </div>
        <br />
        <span data-testid="total-field">0</span>
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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expense,
});

export default connect(mapStateToProps)(Header);
