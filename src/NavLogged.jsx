import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from './assets/vmart.jpg';
import locationpin from './assets/geo-alt-fill.svg';
import './Navbar.css'; // Import custom CSS for Navbar styling

function NavLogged(props) {
  const [location, setLocation] = useState('Vellore');
  const [area, setArea] = useState('632014');

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Simulate location retrieval for demonstration purposes
        // In a real application, you would use a reverse geocoding service
        // to obtain location information based on latitude and longitude
        setLocation('Vellore');
        setArea('632014');
      }, (error) => {
        console.error('Error getting geolocation:', error.message);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url('../vite-deploy/navbar_gradient.jpeg')`, color: '#fff' , position:"relative"}}>
      <img src={logo} height={'70px'} width={'70px'} style={{ borderRadius: '50%', marginRight: '10px' }} />
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: '#fff' }}>VJwellers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="location-info">
                <p className="nav-link active" style={{ margin: 0 }}>Deliver to <b style={{color:'yellow'}}>{location}, {area}</b></p>
                <p className="update-location" onClick={fetchCurrentLocation} style={{ margin: 0 }}><img src={locationpin} alt="locationpin" /><u><b>Update Location</b></u></p>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ marginRight: '10px' }} />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <a href='/vite-deploy/Cart.html'><button className="btn btn-success" type="login" style={{ marginLeft: '10px' }}> <img src="C:\Users\harshit\OneDrive\Documents\work\workwork\Technica_project\technica_copy\vite-project\src\assets\cart.jpg" alt="ADD TO CART" /> </button></a>
        </div>
      </div>
    </nav>
  );
}

NavLogged.propTypes = {
  // Add propTypes if needed
};

export default NavLogged;
