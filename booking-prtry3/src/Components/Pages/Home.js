import '../../Css/Home.css';
import React, { Component } from 'react';
import { Button } from '../Button';
import Cards from '../Cards';


class Home extends Component {
  render() {
    return (
      <>
       <div className='home-container'>
        <h1>Welcome to BOOKINGPR</h1>
        <p>Most known artists are good, but not all good artists are known!</p>
        <div className='home-btns'>
          <Button toPath='/search' className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED</Button>
        </div>
       </div>
       <Cards/>
       </>
    );
  }
}

export default Home;