import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchProducts } from '../api';

const Profile = () => {
  const { user, logout } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products || []);
    };
    loadProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Profile Section */}
      <div className="bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome..! {user.firstName} {user.lastName}</h2>
        <p className="text-lg">Name: {user.firstName} {user.lastName}</p>
        <p className="text-lg">Email: {user.email}</p>
        <p className="text-lg">Username: {user.username}</p>
        <p className="text-lg">Phone: {user.phone}</p> 
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Associate Products Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Your Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="bg-gray-50 p-4 rounded shadow hover:shadow-lg transition">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-lg font-bold">{product.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
