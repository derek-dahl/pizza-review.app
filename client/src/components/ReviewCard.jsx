import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
    return (
        <div className="card mb-4 shadow-lg" style={{ width: '18rem' }}>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{review.pizzaPlace}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{review.location}</h6>
                <p className="card-text">Score: {review.score}</p>
                <button className='btn btn-outline-primary mt-auto'>View Review</button>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.shape({
        pizzaPlace: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReviewCard;
