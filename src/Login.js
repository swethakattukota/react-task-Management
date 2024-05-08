import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [usemail, setusEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { loggedIn, email } = props;

  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if ('' === usemail) {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(usemail)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    if (loggedIn) {
      localStorage.removeItem('user');
      props.setLoggedIn(false);
    } else {
      navigate('/Task');
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Hello!</div>
      </div>
      <h4>Fill in your email and password to sign in.</h4>

      <br />
      <div className={'inputContainer'}>
        <input
          type="text"
          value={usemail}
          placeholder="Email"
          onChange={(ev) => setusEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Sign in'}
        />
        <h4>
          Dont Have an Aaccount? <Link to="/Register">Sign Up</Link>{' '}
        </h4>
      </div>
    </div>
  );
};

export default Login;
