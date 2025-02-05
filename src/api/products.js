import axios from './axios'


export const getProductsRequest = () => axios.get(`/products`)
export const createProductRequest = (product) => axios.post(`/products/registerProduct`, product) 
export const getProductRequest = (id) => axios.get(`/products/${id}`)
export const updateProductRequest = (product) => axios.put(`/products/${product.id}`, product)
export const deleteProductRequest = (id) => axios.delete(`/products/${id}`)
