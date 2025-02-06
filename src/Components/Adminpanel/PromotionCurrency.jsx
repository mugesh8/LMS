import React from 'react';
import { useNavigate } from 'react-router-dom';

const PromotionCurrency = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    navigate('/promotion-lists'); 
  };

  return (
    <div className="container mt-4">
      <h5 className="mb-4">Promotion Currency</h5>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="currencyDetails" className="form-label">Currency Details</label>
          <select className="form-select" id="currencyDetails">
            <option>USD</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="currencyCode" className="form-label">Currency Code</label>
          <input 
            type="text" 
            className="form-control bg-light" 
            id="currencyCode" 
            placeholder="USD" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="currencySymbol" className="form-label">Currency Symbol</label>
          <input 
            type="text" 
            className="form-control bg-light" 
            id="currencySymbol" 
            placeholder="$"  
          />
        </div>

        <div className="mb-3">
          <label htmlFor="currencyName" className="form-label">Currency Name</label>
          <input 
            type="text" 
            className="form-control bg-light" 
            id="currencyName" 
            placeholder="U.S. Dollar" 
          />
        </div>

        <button type="submit" className="btn btn-success" style={{ backgroundColor: '#00e676' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PromotionCurrency;