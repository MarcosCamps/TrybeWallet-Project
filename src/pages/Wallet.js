import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <h1>TrybeWallet</h1>
        <br />
        <b data-testid="email-field">{ email }</b>
        <br />
        <b data-testid="total-field">0</b>
        <br />
        <b data-testid="header-currency-field">BRL</b>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
