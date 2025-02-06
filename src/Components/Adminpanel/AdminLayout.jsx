import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Dashboard from './Dashboard';
import ManageUsers from './ManageUsers';
import './Adminpanel.css';
import PendingUsers from './PendingUsers';
import AddCourses from './AddCourses';
import ApprovedCourses from './ApprovedCourses';
import PendingCourses from './PendingCourses';
import PromotionLists from './PromotionLists';
import AddPromotions from './AddPromotions';
import PromotionCurrency from './PromotionCurrency';
import MainCategories from './MainCategories';
import EditPromotion from './EditPromotion';
import AddCategory from './AddCategory';
import EditMainCategory from './EditMainCategory';
import SubCategories from './SubCategories';
import AddSubCategory from './AddSubCategory';
import EditSubCategory from './EditSubCategory';
import SuperCategories from './SuperCategories';
import AddSuperCategory from './AddSuperCategory';
import EditSuperCategory from './EditSuperCategory';
import PriorityCategory from './PriorityCategory';
import PopularCategory from './PopularCategory';
import HomeTopCategory from './HomeTopCategory';

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 991);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="admin-layout">
      <AdminNavbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={`main-content ${isCollapsed ? 'expanded' : ''}`}>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* User management routes */}
          <Route path="/approved-users" element={<ManageUsers />} />
         
          <Route path="/pending-users" element={<PendingUsers />} />

          <Route path="/add-courses" element={<AddCourses />} />

          <Route path="/approved-courses" element={<ApprovedCourses />} />
          
          <Route path="/pending-courses" element={<PendingCourses />} />

          <Route path="/promotion-lists" element={<PromotionLists />} />

          <Route path="/edit-promotion" element={<EditPromotion />} />

          <Route path="/add-promotions" element={<AddPromotions />} />

          <Route path="/promotion-currency" element={<PromotionCurrency />} />

          <Route path="/main-category" element={<MainCategories />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/edit-main-category" element={<EditMainCategory />} />
          <Route path="/sub-category" element={<SubCategories />} />
          <Route path="/add-sub-category" element={<AddSubCategory />} />
          <Route path="/edit-sub-category" element={<EditSubCategory />} />
          <Route path="/super-category" element={<SuperCategories />} />
          <Route path="/add-super-category" element={<AddSuperCategory />} />
          <Route path="/edit-super-category" element={<EditSuperCategory />} />
          <Route path="/priority-category" element={<PriorityCategory />} />
          <Route path="/popular-category" element={<PopularCategory />} />
          <Route path="/home-top-category" element={<HomeTopCategory />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;