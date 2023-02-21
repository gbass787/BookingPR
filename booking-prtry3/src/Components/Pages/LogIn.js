import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function LogIn() {

  const dummy_data = {email:'elpolloloco@gmail.com', password: 'Benit0L@Cabra'}
  // Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Error texts
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  //Utility
  const navigate = useNavigate();

  /*------------Field input handlers----------------*/
  function inputEmail(event) {
    setEmail(event.target.value);
  }

  function inputPassword(event) {
    setPassword(event.target.value);
  } 
  /*-------------------------------------------------*/

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if(IsValid()){
      //navigate('/');
    }
  }

  //Validate fields after submit
  function IsValid() {
    //Check db for real values
    if (email.length === 0){
      setEmailError('*Email is required.');
    }else setEmailError('');

    if (password.length === 0){
      setPasswordError('*Password is required.');
    }else setPasswordError('');

    //sp for getting user

    if(email === dummy_data.email && password === dummy_data.password){
      console.log('success');
    }else{
      
    }

    if(emailError === '' && passwordError ===''){
      return true;
    }else 
      return false;
  }  

  return (
    <div className='form-container' >
       <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control placeholder="Enter email" onChange={inputEmail} value={email} />
          <Form.Label className="text-danger">{emailError}</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={inputPassword} value={password} placeholder="Password" />
          <Form.Label className="text-danger">{passwordError}</Form.Label>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form> 
    </div>
  );
}

export default LogIn;