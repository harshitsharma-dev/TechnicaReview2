import React, { useState, useEffect } from 'react';
import RatingsAndReviews from './Review';

function Product({ id }) {
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

  const desiredIds = [id];
  const filteredFake = fake.filter((item) => desiredIds.includes(item.id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {filteredFake.map((values) => (
            <div key={values.id} className="card" style={{ maxWidth: "400px", margin: "2rem" }}>
              <img src={values.image} className="card-img-top" alt="Product" style={{ width: "200px", height: "auto" }} />
              <div className="card-body">
                <h5 className="card-title">{values.title}</h5>
                <p className="card-text">{values.description}</p>
                <a href="#" className="btn btn-primary">${values.price}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <RatingsAndReviews />
        </div>
      </div>
    </div>
  );
}

export default Product;
