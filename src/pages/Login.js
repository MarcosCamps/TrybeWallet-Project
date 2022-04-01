import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submiteAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  isValid = () => {
    const { email, password } = this.state;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email.match(regexEmail);
    const MIN_LENGTH_VALUE = 6;
    const minPasswordValid = password.length >= MIN_LENGTH_VALUE;
    if (isEmailValid && minPasswordValid) {
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.isValid());
  }

  // handleSubmit({ target: { name, value } }) {
  //   const { password } = this.state;
  //   this.setState({ [name]: value });
  //   const isValid = minPasswordValid;
  //   if (isValid) {
  //     this.setState({ btnDisabled: false });
  //   } else {
  //     this.setState({ btnDisabled: true });
  //   }
  // }

  // handleClick() {
  //   const { history, dispatchForm } = this.props;
  //   dispatchForm(this.state);
  //   history.push('/carteira');
  // }

  render() {
    const { dispatchForm } = this.props;
    const { email, password, btnDisabled } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="submit"
            name="send-button"
            onClick={ () => dispatchForm(email) }
            disabled={ btnDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchForm: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchForm: (email) => dispatch(submiteAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
