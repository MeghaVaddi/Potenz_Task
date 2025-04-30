import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProductById(id);  
      setProduct(data);  
    };
    load();
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
       
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">{product.title}</h2>

       
        <div className="flex justify-center mb-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

       
        <div className="text-center mb-4">
          <p className="text-lg text-gray-700">{product.description}</p>
        </div>

       
        <div className="text-center mb-6">
          <p className="text-xl font-bold text-green-600">Price: ${product.price}</p>
        </div>

        
      </div>
    </div>
  );
};

export default ProductDetails;
