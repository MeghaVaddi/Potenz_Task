// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginRoute from './component/LoginRoute';
import Login from './Pages/Login';
import MainDashboard from './Pages/MainDashboard';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
    <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
     
        <Route path="/login" element={<Login />} />
        <Route
          path="/main-dashboard"
          element={
            <LoginRoute>
              <MainDashboard />
            </LoginRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <LoginRoute>
              <Profile />
            </LoginRoute>
          }
        />
        <Route
          path="/products"
          element={
            <LoginRoute>
              <Products />
            </LoginRoute>
          }
        />
         <Route path="/products/:id" element={
          <LoginRoute> <ProductDetails />
          </LoginRoute>} />
        
        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
