import React, { useState } from "react";
import "./App.css";
import pizzaReviews from "./data/pizzaReviews";
import ReviewCard from "./components/ReviewCard";
import Modal from "./components/Modal";
import ReviewForm from "./components/ReviewForm";
import Header from "./components/Header";
import AddReviewButton from "./components/AddReviewButton";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState(pizzaReviews); // Use state to manage reviews

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        {/* TODO: Refactor into button component in header */}
        <AddReviewButton onClick={handleOpenModal} />

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Add a Review</h2>
          <ReviewForm onSubmit={handleAddReview} onClose={handleCloseModal} />
        </Modal>

        <div className="row">
          {reviews.map((review) => (
            <div className="col-sm-6 col-md-3 mb-4" key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
