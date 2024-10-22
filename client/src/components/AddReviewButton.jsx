import React from "react";

const AddReviewButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn btn-outline-primary mt-auto">
        Add Review
      </button>
    </div>
  );
};

export default AddReviewButton;
