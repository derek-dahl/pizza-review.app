import React, { useState } from 'react';
import './App.css';
import pizzaReviews from './data/pizzaReviews';
import ReviewCard from './components/ReviewCard';
import Modal from './components/Modal';
import ReviewForm from './components/ReviewForm';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState(pizzaReviews); // Use state to manage reviews

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    const handleAddReview = (newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center display-4 my-4">🍕 Pizza Reviews 🍕</h1>
            <button onClick={handleOpenModal} className="btn btn-outline-primary mt-auto">
                Add Review
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Add a Review</h2>
                <ReviewForm onSubmit={handleAddReview} onClose={handleCloseModal} />
            </Modal>

            <div className="row">
                {reviews.map((review) => (
                    <div className="col-sm-6 col-md-4 mb-4" key={review.id}>
                        <ReviewCard review={review} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;