import React from 'react';
import { Button } from '../Button';
import '../../Css/Footer.css';
import { Link }from "react-router-dom";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Stay tuned for more upcoming artists, and follow your favorites.
        </p>
        <p>You can unsubscribe at any time</p>
        <div className='input-areas'>
            <form>
                <input type="email" name="email" placeholder="Type your email" disabled={true} className="footer-input"/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-link'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> Contact Us </h2>
            <label>Email:blahblah@gmail.com</label>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to="/" className='social-logo'>
              BOOKINGPR <i className='fas fa-guitar'></i>
            </Link>
          </div> 
          <small className='website-rights'>BOOKINGPR © 2023</small>
          <div className='social-icons'>
            <Link to='/' target="_blank" aria-label="Facebook" className='social-icon-link facebook'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link to='/' target="_blank" aria-label="Instagram" className='social-icon-link instagram'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link to='/' target="_blank" aria-label="Facebook" className='social-icon-link youtube'>
              <i className='fab fa-youtube'></i>
            </Link>
            <Link to='/' target="_blank" aria-label="Twitter" className='social-icon-link twitter'>
              <i className='fab fa-twitter'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
