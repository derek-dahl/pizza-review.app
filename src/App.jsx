import React from 'react';
import './App.css';
import pizzaReviews from './data/pizzaReviews';
import ReviewCard from './components/ReviewCard';
import { useState } from 'react';


const App = () => {
  return (
      <div className="container mt-4">
          <h1 className="text-center display-4 my-4">🍕 Pizza Reviews 🍕</h1>
          <button className="btn btn-outline-primary mt-auto">Add Review</button>
          <div className="row">
              {pizzaReviews.map((review) => (
                  <div className="col-sm-6 col-md-4 mb-4" key={review.id}>
                      <ReviewCard review={review} />
                  </div>
              ))}
          </div>
      </div>
  );
};

export default App;
