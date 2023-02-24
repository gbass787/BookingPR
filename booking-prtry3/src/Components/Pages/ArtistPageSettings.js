import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Css/SignUp.css';

function SignUp() {

  //Fields
  const [bandname, setBandname] = useState('');
  const [genre, setGenre] = useState('');
  const [region, setRegion] = useState('');
  const [bandType, setBandType] = useState('');
  const [bandInformation, setBandInformation] = useState('');
  //Socials are not validated
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [youtube, setYoutube] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Error texts
  const [bandnameError, setBandNameError] = useState('');
  const [genreError, setGenreError] = useState('');
  const [regionError, setRegionError] = useState('');
  const [bandtypeError, setBandtypeError] = useState('');
  const [bandInformationError, setBandInformationError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

/*------------Field input handlers----------------*/

  function inputBandname(event){
    setBandname(event.target.value);
  }

  function inputGenre(event){
    setGenre(event.target.value);
  }

  function inputRegion(event){
    setRegion(event.target.value);
  }

  function inputBandType(event){
    setBandType(event.target.value);
  }

  function inputBandInformation(event){
    setBandInformation(event.target.value);
  }

  function inputInstagram(event){
    setInstagram(event.target.value);
  }

  function inputFacebook(event){
    setFacebook(event.target.value);
  }

  function inputYoutube(event){
    setYoutube(event.target.value);
  }

  function inputEmail(event){
    setEmail(event.target.value);
  }

  function inputPassword(event){
    setPassword(event.target.value);
  }

/*-------------------------------------------------*/

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if(IsValid()){
      //save user to db
      //navigate('/');
    }
  }

  function IsValid() {

    if (bandname.length === 0){
      setBandNameError('*Band name is required.');
    }

    if (genre.length === 0){
      setGenreError('*Genre is required.');
    }

    if (region.length === 0){
      setRegionError('*Region is required.');
    }

    if (bandType.length === 0){
      setBandtypeError('*Band type is required.');
    }

    if (bandInformation.length === 0){
      setBandInformationError('*Band Information is required.');
    }else if(bandInformation.length > 300){
      setBandInformationError('*Band Information should contain less than 300 characters.');
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
    }else {setPasswordError('')}

    if(emailError === '' && passwordError ===''){
      return true;
    }else 
      return false;
  }
  

  return (
    <div >
    <Form  onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >BandName</Form.Label>
          <Form.Control onChange={inputBandname} 
                        value={bandname}  
                        placeholder="Enter Band name" />
          <Form.Label className="text-danger">{bandnameError}</Form.Label>
        </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label >Genre</Form.Label>
              <Form.Select  value={genre} 
                            onChange={inputGenre} 
                            defaultValue="Choose Genre..." >
                <option value=''>Choose Genre...</option>
                <option value='Pop'>Pop</option>
                <option value='Rock'>Rock</option>
                <option value='Cultural'>Cultural</option>
                <option value='Electronic'>Electronic</option>
                <option value='Gospel'>Gospel</option>
                <option value='Metal'>Metal</option>
                <option value='Other'>Other</option>
              </Form.Select>
            <Form.Label className="text-danger">{genreError}</Form.Label>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label className='signup-label'>Region</Form.Label>
              <Form.Select onChange={inputRegion} 
                          value={region} defaultValue="Select Region...">
                <option value=''>Select Region...</option>
                <option value='North'>North</option>
                <option value='West'>West</option>
                <option value='South'>South</option>
                <option value='East'>East</option>
              </Form.Select>
              <Form.Label className="text-danger">{regionError}</Form.Label>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>BandType</Form.Label>
              <Form.Select onChange={inputBandType} 
                          value={bandType} defaultValue="Choose Band type...">
                <option value=''>Choose Band type...</option>
                <option value='Singer'>Singer</option>
                <option value='Band'>Band</option>
                <option value='Instrumental'>Instrumental</option>
              </Form.Select>
              <Form.Label className="text-danger">{bandtypeError}</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label >Band Information</Form.Label>
            <Form.Control onChange={inputBandInformation} 
                          value={bandInformation} 
                          as="textarea" 
                          rows={3} />
            <Form.Label className="text-danger">{bandInformationError}</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
      <Form.Group>
        <Form.Label htmlFor="inlineFormInputGroupUsername" >
            Instagram
          </Form.Label>
          <InputGroup>
            <InputGroup.Text >@</InputGroup.Text>
            <Form.Control onChange={inputInstagram} 
                          value={instagram}
                          id="inlineFormInputGroupUsername"
                          placeholder="Username"
            />
          </InputGroup>
      </Form.Group>
      </Col>
      <Col sm={4}>
      <Form.Group>
        <Form.Label htmlFor="inlineFormInputGroupUsername" >
            Facebook
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control onChange={inputFacebook} 
                          value={facebook}
                          id="inlineFormInputGroupUsername"
                          placeholder="Username"
            />
          </InputGroup>
      </Form.Group>
      </Col>
      <Col sm={4}>
      <Form.Group>
        <Form.Label htmlFor="inlineFormInputGroupUsername">
            Youtube
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control onChange={inputYoutube} 
                          value={youtube}
                          id="inlineFormInputGroupUsername"
                          placeholder="Username"
            />
          </InputGroup>
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Email address</Form.Label>
            <Form.Control onChange={inputEmail} 
                          value={email} type="email" placeholder="Enter email" />
            <Form.Label className="text-danger">{emailError}</Form.Label>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control onChange={inputPassword} 
                          value={password} 
                          type="password" 
                          placeholder="Password" />
            <Form.Label className="text-danger">{passwordError}</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <div>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
    </div>
  );
}

export default SignUp;