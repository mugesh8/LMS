import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddPromotions = () => {
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/promotion-lists');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-4">Add Promotion</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="promotionName" className="form-label">Promotion Name</label>
              <input
                type="text"
                className="form-control"
                id="promotionName"
                placeholder="Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="promotionDuration" className="form-label">Promotion Duration - Days</label>
              <input
                type="text"
                className="form-control"
                id="promotionDuration"
                placeholder="Duration"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="promotionPrice" className="form-label">Promotion Price</label>
              <input
                type="text"
                className="form-control"
                id="promotionPrice"
                placeholder="Price"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="promotionSpecialPrice" className="form-label">Promotion Special Price</label>
              <input
                type="text"
                className="form-control"
                id="promotionSpecialPrice"
                placeholder="Special Price"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-success"
              style={{ backgroundColor: '#00E676' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPromotions;