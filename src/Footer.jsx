import React from 'react';
// import './Footer.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{textAlign:"left"}}>
            <h2>Contact Us</h2>
            <p>Email: harshitsharma182021@gmail.com</p>
            <p>Phone: 923456324</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <a href="https://www.instagram.com/lavanpvt?igsh=MWN4Nmk2bHNocGZ6Mw==" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
          </div>
        </div>
      </div>
      Hello
    </footer>
  );
}

export default Footer;