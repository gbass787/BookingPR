import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firebase from 'firebase/app';
import 'firebase/firestore';
import '../../Css/SignUp.css';

function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function inputUsername(event){
    setUsername(event.target.value);
  }

  function inputEmail(event){
    setEmail(event.target.value);
  }

  function inputPassword(event){
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if(IsValid()){
      // Save user to the database
      const db = firebase.firestore();
      const userRef = db.collection('users').doc();
      const hashedPassword = hashPassword(password);
      userRef.set({
        username: username,
        users_pwd: hashedPassword,
        users_email: email,
      })
      .then(() => {
        console.log('User added to database.');
      })
      .catch((error) => {
        console.error('Error adding user to database: ', error);
      });
      //navigate('/');
    }
  }

  function IsValid() {

    if (username.length === 0){
      setUsernameError('*Username is required.');
    }

    //Validate Email address
    if (email.length === 0){
      setEmailError('*Email is required.');
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      setEmailError('*Email is invalid.');
    }

    //Validate password requirements
    if (password.length === 0){
      setPasswordError('*Password is required.');
    }else if(!/(?=.*[a-z])/.test(password)){
      setPasswordError('*Invalid Password: Password must contain at least one lower case character.');
    }else if(!/(?=.*[A-Z])/.test(password)){
      setPasswordError('*Invalid Password: Password must contain at least one upper case character.');
    }else if(!/(?=.*\d)/.test(password)){
      setPasswordError('*Invalid Password: Password must contain at least one number.');
    }else if(!/(?=.*[@$!%*?&])/.test(password)){
      setPasswordError('*Invalid Password: Password must contain at least one special character(@$!%*?&).');
    }else if(!/^[a-zA-Z\d@$!%*?&]{1,}$/.test(password)){
      setPasswordError('*Invalid Password: Password contains unsupported special character.');
    }else if(!/[a-zA-Z\d@$!%*?&]{8,}/.test(password)){
      setPasswordError('*Invalid Password: Password must contain at least 8 characters');
    }else {
      setPasswordError('');
    }

    if(usernameError === '' && emailError === '' && passwordError === ''){
      return true;
    }else {
      return false;
    }
  }

  function hashPassword(password) {
    // You can use any hashing library you like, this is just an example
    const hashedPassword = require('crypto')
      .createHash('sha256')
      .update(password)
      .digest('hex');
    return hashedPassword;
  }

  return (
    <div >
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} >
            <h2>Sign Up</h2>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Enter username" onChange={inputUsername} value={username} />
              </InputGroup>
              <Form.Text className="text-danger">{usernameError}</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control type="email" placeholder="Enter email" onChange={inputEmail} value={email} />
              </InputGroup>
              <Form.Text className="text-danger">{emailError}</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control type="password" placeholder="Password" onChange={inputPassword} value={password} />
              </InputGroup>
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
