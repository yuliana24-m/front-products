import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

function ProductPage  ()  {
  const { register, handleSubmit } = useForm();
  const { createProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams();




  const onSubmit = handleSubmit((data) => {
    createProduct(data);
      navigate('/products');
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #333333, #000000)', // Fondo degradado
      }}
    >
      <div
        className="max-w-md mx-auto p-6"
        style={{
          backgroundColor: '#ffffff', // Fondo blanco para el formulario
          borderRadius: '10px', // Bordes redondeados
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
        }}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Registrar Producto</h1>
  
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Campo de código */}
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Código
            </label>
            <input
              id="code"
              placeholder="Ingrese el código"
              {...register("code", { required: "Este campo es requerido" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Campo de nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              id="name"
              placeholder="Ingrese el nombre del producto"
              {...register("name", { required: "Este campo es requerido" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Campo de descripción */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción
            </label>
            <textarea
              id="description"
              placeholder="Ingrese una descripción"
              {...register("description", {
                required: "Este campo es requerido",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Campo de precio */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Precio
            </label>
            <input
              id="price"
              type="number"
              placeholder="Ingrese el precio"
              {...register("price", { required: "Este campo es requerido" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Campo de categoría */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categoría
            </label>
            <input
              id="category"
              placeholder="Ingrese la categoría"
              {...register("category")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Campo de stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Stock
            </label>
            <input
              id="stock"
              type="number"
              placeholder="Ingrese la cantidad en stock"
              {...register("stock", { required: "Este campo es requerido" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Botón de submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Registrar Producto
          </button>
        </form>
  
        {/* Enlace para redirigir a la página de productos */}
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes productos registrados?{" "}
          <Link to="/products" className="text-indigo-600 hover:underline">
            Ver productos
          </Link>
        </p>
      </div>
    </div>
  );
  
};

export default ProductPage;
