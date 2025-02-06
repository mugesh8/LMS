import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample data for the line chart
  const chartData = [
    { month: 'Jan', users: 0 },
    { month: 'Feb', users: 0 },
    { month: 'Mar', users: 0 },
    { month: 'Apr', users: 0 },
    { month: 'May', users: 0 },
    { month: 'Jun', users: 0 },
    { month: 'Jul', users: 0 },
    { month: 'Aug', users: 0 },
    { month: 'Sep', users: 0 },
    { month: 'Oct', users: 0 },
    { month: 'Nov', users: 0 },
    { month: 'Dec', users: 0 },
  ];

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4">Dashboard</h1>
      
      {/* Stats Cards Row */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="display-4 mb-0">20</h3>
              <p className="text-primary mb-0">Total Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="display-4 mb-0">19</h3>
              <p className="text-primary mb-0">Approved Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="display-4 mb-0">16</h3>
              <p className="text-primary mb-0">Total Courses</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="display-4 mb-0">11</h3>
              <p className="text-primary mb-0">Approved Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Stats Row */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-danger">
                  <i className="fas fa-circle me-2"></i>
                  Pending Users
                </span>
                <span>1</span>
              </div>
              <div className="progress">
                <div 
                  className="progress-bar bg-danger" 
                  role="progressbar" 
                  style={{width: '5%'}} 
                  aria-valuenow="5" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-danger">
                  <i className="fas fa-circle me-2"></i>
                  Pending Courses
                </span>
                <span>5</span>
              </div>
              <div className="progress">
                <div 
                  className="progress-bar bg-danger" 
                  role="progressbar" 
                  style={{width: '31%'}} 
                  aria-valuenow="31" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Users Card */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="display-4 mb-0">0</h1>
                  <p className="mb-0">Users</p>
                </div>
                <div>
                  <p className="mb-0">Today New Users</p>
                  <i className="fas fa-clone float-end fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Notification Section */}
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Details Chart</h5>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#4e73df" 
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Push Notification</h5>
              <p>Send Push Notification to all users</p>
              <textarea 
                className="form-control mb-3" 
                rows="6"
              ></textarea>
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;