
import { Routes, Route } from 'react-router'
import DashboardLayout from './layout/DashboardLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import MyCart from './pages/MyCart'
import MyThemeContext from './components/MyThemeContext'
import Login from './pages/Login'
import AuthLayout from './layout/AuthLayout'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

const AppRoutes = () => {
  return (
    <MyThemeContext>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/Mycart' element={<MyCart />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userID" element={<UserDetail />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>

      </Routes>
    </MyThemeContext>
  )
}

export default AppRoutes
