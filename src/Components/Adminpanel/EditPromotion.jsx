import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPromotion = () => {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/promotion-lists'); // Redirect to promotions list after submit
  };

  return (
    <div className="container mt-4">
      <h5 className="mb-4">Edit Promotion</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="promotionName" className="form-label">Promotion Name</label>
          <input
            type="text"
            className="form-control"
            id="promotionName"
            name="name"
           
          />
        </div>

        <div className="mb-3">
          <label htmlFor="promotionDuration" className="form-label">Promotion Duration - Days</label>
          <input
            type="number"
            className="form-control"
            id="promotionDuration"
            name="duration"
           
          />
        </div>

        <div className="mb-3">
          <label htmlFor="promotionPrice" className="form-label">Promotion Price</label>
          <input
            type="number"
            className="form-control"
            id="promotionPrice"
            name="price"
           
          />
        </div>

        <div className="mb-3">
          <label htmlFor="promotionSpecialPrice" className="form-label">Promotion Special Price</label>
          <input
            type="number"
            className="form-control"
            id="promotionSpecialPrice"
            name="specialPrice"
           
          />
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default EditPromotion;