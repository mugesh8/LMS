import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PromotionLists = () => {
  const navigate = useNavigate()
  const promotions = [
    {
      id: 1,
      name: "Gold",
      duration: "50 days",
      price: "$ 100",
      specialPrice: "$ 0"
    },
    {
      id: 2,
      name: "Silver",
      duration: "30 days",
      price: "$ 80",
      specialPrice: "$ 85"
    },
    {
      id: 3,
      name: "Bronze",
      duration: "20 days",
      price: "$ 50",
      specialPrice: "$ 60"
    },
    {
      id: 4,
      name: "New one",
      duration: "89 days",
      price: "$ 99",
      specialPrice: "$ 100"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h5 className="mb-3">Manage Promotions</h5>
        <Link to='/add-promotions'><button className="btn btn-primary">Add Promotion</button></Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-light text-center">
          <thead className='table-hover align-middle"'>
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>Promotion name</th>
              <th className='text-center'>Promotion Duration</th>
              <th className='text-center'>Promotion Price</th>
              <th className='text-center'>Promotion Special Price</th>
              <th className='text-center'>Edit</th>
              <th className='text-center'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion) => (
              <tr key={promotion.id}>
                <td className='text-center'>{promotion.id}</td>
                <td className='text-center'>{promotion.name}</td>
                <td className='text-center'>{promotion.duration}</td>
                <td className='text-center'>{promotion.price}</td>
                <td className='text-center'>{promotion.specialPrice}</td>
                <td className='text-center'>
                  <button className="btn btn-primary" onClick={() => navigate(`/edit-promotion`)}>
                    <i className="bi bi-pencil"></i>
                  </button>
                </td> 
                <td className='text-center'>
                  <button className="btn btn-primary">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionLists;