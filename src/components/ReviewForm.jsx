import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, onClose }) => {
    const [pizzaParlor, setPizzaParlor] = useState('');
    const [location, setLocation] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            pizzaPlace: pizzaParlor,
            location: location,
            score: parseFloat(score),
        };
        onSubmit(newReview); // Call the parent function to handle the new review
        setPizzaParlor('');
        setLocation('');
        setScore('');
        onClose(); // Close the modal after submission
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow">
            <h2 className="mb-4">Add a New Review</h2>
            
            <div className="mb-3">
                <label htmlFor="pizzaParlor" className="form-label">Pizza Parlor</label>
                <input
                    type="text"
                    id="pizzaParlor"
                    className="form-control"
                    placeholder="Enter pizza parlor name"
                    value={pizzaParlor}
                    onChange={(e) => setPizzaParlor(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="e.g., New York, NY"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="score" className="form-label">Score (1-10)</label>
                <input
                    type="number"
                    id="score"
                    className="form-control"
                    placeholder="Rate from 1 to 10"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                    min="0"
                    max="10"
                    step="0.1"
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Add Review</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>Close</button>
        </form>
    );
};

export default ReviewForm;
