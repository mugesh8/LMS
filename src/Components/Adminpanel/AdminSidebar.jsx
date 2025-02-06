import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminSidebar = ({ isCollapsed }) => {
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isPromotionsOpen, setIsPromotionsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCoursesPropertiesOpen, setIsCoursesPropertiesOpen] = useState(false);
  const [isManageVideoOpen, setIsManageVideoOpen] = useState(false);
  const [isManageCommissionOpen, setIsManageCommissionOpen] = useState(false);
  const [isManageOrdersOpen, setIsManageOrdersOpen] = useState(false);
  const [isSiteManagementOpen, setIsSiteManagementOpen] = useState(false);

  return (
    <div className={`sidebar bg-primary text-white ${isCollapsed ? '' : 'collapsed'}`}>
      <div className="sidebar-content h-100 d-flex flex-column">
        <div className="p-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white p-2 hover:bg-blue-700 transition-colors">
                <i className="bi bi-grid me-2"></i>
                {!isCollapsed && 'Dashboard'}
              </Link>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsUsersOpen(!isUsersOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                    <i className="bi bi-people me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Manage Users
                        {isUsersOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isUsersOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/approved-users" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Approved Users
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pending-users" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Pending Users
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-book me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Manage Courses
                        {isCoursesOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isCoursesOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Add Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Approved Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pending-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Pending Courses
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsPromotionsOpen(!isPromotionsOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-tag me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Manage Promotions
                        {isPromotionsOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isPromotionsOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/promotion-lists" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Promotion Lists
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-promotions" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Add Promotion
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/promotion-currency" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Promotion Currency
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-folder me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Categories
                        {isCategoriesOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isCategoriesOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/main-category" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Main Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sub-category" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Sub Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/super-category" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Super Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/priority-category" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Priority Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/popular-category" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Popular Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home-top-category" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Home Top Category
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsCoursesPropertiesOpen(!isCoursesPropertiesOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-book me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Courses Properties
                        {isCoursesPropertiesOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isCoursesPropertiesOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Manage Courses For
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Manage Courses Language
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pending-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Manage Currency
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsManageVideoOpen(!isManageVideoOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-camera-video me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Manage Video Settings
                        {isManageVideoOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isManageVideoOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Video Settings
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsManageCommissionOpen(!isManageCommissionOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-currency-dollar me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Manage Commission
                        {isManageCommissionOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isManageCommissionOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Commission Lists
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Add Commission
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsManageOrdersOpen(!isManageOrdersOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-cart me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Manage Orders
                        {isManageOrdersOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isManageOrdersOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Course New Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Settled Orders
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div>
                <button
                  onClick={() => setIsSiteManagementOpen(!isSiteManagementOpen)}
                  className="nav-link text-white w-full flex items-center justify-between border-none bg-transparent p-2 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                  <i className="bi bi-globe me-2"></i>
                    {!isCollapsed && (
                      <span className="flex items-center">
                        Site Management
                        {isSiteManagementOpen ? (
                          <ArrowDown className="ml-2 h-2 w-4" size={'18px'} />
                        ) : (
                          <ArrowRight className="ml-2 h-2 w-4" size={'18px'}/>
                        )}
                      </span>
                    )}
                  </div>
                </button>
                {isSiteManagementOpen && !isCollapsed && (
                  <ul className="nav flex-column pl-4">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Banner Management
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Logo Management
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Default Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link text-white py-2 hover:bg-blue-700 transition-colors">
                        Stripe Settings
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link text-white p-2 hover:bg-blue-700 transition-colors">
                <i className="bi bi-question-circle me-2"></i>
                {!isCollapsed && 'Help Management'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminSidebar;