import axios from 'axios';
const URL = 'https://dummyjson.com';

export const fetchUsers = async () => {
  const response = await axios.get(`${URL}/users`);
  return response.data.users;
};


export const fetchProducts = async (limit = 10, skip = 0) => {
  const response = await axios.get(`${URL}/products?limit=${limit}&skip=${skip}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${URL}/products/${id}`);
  return response.data;
};
