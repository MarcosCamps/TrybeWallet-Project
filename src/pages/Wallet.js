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
    return (
      <section>
        <Header />
      </section>
    );
  }
}

Wallet.propTypes = {
  currencieAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currencieAction: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(Wallet);
