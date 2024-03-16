import React, { useState } from 'react';
import './Ratings.css'; // Import custom CSS for styling

const RatingStar = ({ value, onStarClick }) => {
  const handleClick = () => onStarClick(value);

  return (
    <span onClick={handleClick} className={`star ${value <= value ? 'active' : ''}`}>
      &#9733;
    </span>
  );
};

const RatingsAndReviews = ({ initialRating = 0, initialReviews = [] }) => {
  const [rating, setRating] = useState(initialRating);
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewText, setReviewText] = useState('');

  // Handle star click event
  const handleStarClick = (newRating) => setRating(newRating);

  // Add a new review
  const addReview = () => {
    if (reviewText.trim() !== '') {
      setReviews([...reviews, { text: reviewText }]);
      setReviewText(''); // Clear the review text after submitting
    }
  };

  return (
    <div className="ratings-and-reviews">
      <h2 className="section-title" style={{ fontSize: '30px' }}><b><u>Ratings</u></b></h2>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingStar key={value} value={value} onStarClick={handleStarClick} />
        ))}
      </div>
      <span className="average-rating">Average Rating: {rating.toFixed(1)}</span>
      <hr />
      <h2 className="section-title" style={{ fontSize: '30px' }}><b><u>Reviews</u></b></h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>{review.text}</p>
        </div>
      ))}

      {/* Add review form */}
      <hr />
      <h2 className="section-title"><u>Add a Review</u></h2>
      <textarea
        className="review-textarea"
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button className="submit-review-btn" onClick={addReview}>Submit Review</button>
    </div>
  );
};

export default RatingsAndReviews;
