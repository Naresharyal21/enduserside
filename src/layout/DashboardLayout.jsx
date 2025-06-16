import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Cartdisplay from '../components/Cartdisplay';
import MyCart from '../pages/MyCart';
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(prev => !prev);
  };

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  return (
    <div>
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-content">
          <Navbar onCartToggle={handleCartToggle} />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <Cartdisplay onClose={() => setShowCart(false)}>
          <MyCart />
        </Cartdisplay>
      )}
    </div>
  );
};

export default DashboardLayout;
