import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css'; // Import CSS file for styling

function App() {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setFake(jsonData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleReadMore = (event) => {
    event.preventDefault();
    const cardBody = event.target.parentNode;
    const cardText = cardBody.querySelector('.card-text');
    const fullText = cardText.getAttribute('data-full-text');
    const isExpanded = cardText.classList.toggle('expanded');
    if (isExpanded) {
      cardText.textContent = fullText;
      event.target.textContent = 'Read less';
    } else {
      cardText.textContent = truncateText(fullText, 100);
      event.target.textContent = 'Read more';
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-wrap justify-content-center">
        {fake.map((values) => {
          function passVal() {
            console.log(values.id);
            localStorage.setItem('objectToPass', values.id);
          }
          return (
            <a key={values.id} href='../vite-deploy/ProductPage.html' onClick={passVal} className="card btn " style={{ width: "18rem", margin: "2rem", textDecoration: 'none', position: 'relative' }}>
              <img src={values.image} className="card-img-top" alt="imagehere" style={{ maxHeight: '200px', objectFit: 'contain' }} />
              <img src={values.hoverImage} className="hover-img" alt="hoverImage" style={{ maxHeight: '200px', objectFit: 'contain', display: 'none', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
              <div className="card-body">
                <h5 className="card-title">
                  {values.title.length > 20 ? values.title.slice(0, 20) + '...' : values.title}
                </h5>
                <p className="card-text" data-full-text={values.description}>
                  {truncateText(values.description, 100)}
                </p>
                {values.description.length > 100 && (
                  <button className="btn btn-link" onClick={handleReadMore}>Read more</button>
                )}
                <a href="" className="btn btn-primary">${values.price}</a>
              </div>
            </a>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
