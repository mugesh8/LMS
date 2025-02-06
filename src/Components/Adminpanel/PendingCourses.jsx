import React, { useState } from 'react';

const PendingCourses = () => {
     const [searchTerm, setSearchTerm] = useState('');
  const [courses] = useState([
    { id: 1, name: 'Course name 1', price: 76 },
    { id: 2, name: 'Course name 2', price: 23 },
    { id: 3, name: 'Course name 3', price: 23 },
    { id: 4, name: 'Course name 4', price: 49 },
    { id: 5, name: 'Course name 5', price: 250 },
  ]);

  return (
    <div className="container mt-4">
      <h4>Manage Pending Courses</h4>
      
      <div className="mb-4 d-flex justify-content-end">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ boxShadow: 'none' }}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className='table-light text-center'>
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>Course Name</th>
              <th className='text-center'>Price</th>
              <th className='text-center'>View</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className='text-center'>{course.id}</td>
                <td className='text-center'>{course.name}</td>
                <td className='text-center'>{course.price}</td>
                <td className='text-center'>
                  <button className="btn btn-primary">
                    <i className="bi bi-eye"></i>
                  </button>
                </td>
                <td className='text-center'>
                  <button className="btn btn-primary">
                    Enable
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

export default PendingCourses;