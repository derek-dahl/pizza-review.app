import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, onClose }) => {
    const [pizzaParlor, setPizzaParlor] = useState('');
    const [location, setLocation] = useState('');
    const [score, setScore] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            pizzaPlace: pizzaParlor,
            location: location,
            score: score,
        };
        onSubmit(newReview); // Call the parent function to handle the new review
        setPizzaParlor('');
        setLocation('');
        setScore(0);
        onClose(); // Close the modal after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Pizza Parlor"
                value={pizzaParlor}
                onChange={(e) => setPizzaParlor(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Location (e.g., New York, NY)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Score (1-10)"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                min="1"
                max="10"
                required
            />
            <button type="submit">Add Review</button>
            <button type="button" onClick={onClose}>Close</button>
        </form>
    );
};

export default ReviewForm;
