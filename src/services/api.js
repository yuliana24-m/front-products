import axios from 'axios';

const API_URL = 'http://localhost:4000/products';

// Función para obtener todos los productos
export const getProducts = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },  // Enviar el token JWT
  });
  return response.data;
};

// Función para agregar un nuevo producto
export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

// Función para editar un producto existente
export const updateProduct = async (productId, product) => {
  const response = await axios.put(`${API_URL}/${productId}`, product, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

// Función para eliminar un producto
export const deleteProduct = async (productId) => {
  await axios.delete(`${API_URL}/${productId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
