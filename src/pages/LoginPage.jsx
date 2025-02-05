import React from 'react'
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



function LoginPage(){

    const{ register, handleSubmit, formState: {errors} } = useForm();
    const {signin, errors: signinErrors} = useAuth();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async(data) => {
        await signin(data);
        navigate('/products');

      });   

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Iniciar Sesión
            </h1>
    
            {/* Mostrar errores de validación */}
            {signinErrors.map((error, index) => (
              <div className="bg-red-500 p-3 text-white text-center rounded-lg mb-4" key={index}>
                {error}
              </div>
            ))}
            
            {/* Formulario de inicio de sesión */}
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Usuario@ejemplo.com"
                  {...register("email", { required: true })}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
                {errors.email && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
    
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Ingrese la contraseña"
                  {...register("password", { required: true })}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
                {errors.password && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
    
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Iniciar Sesión
              </button>
            </form>
    
            <p className="mt-6 text-center text-sm text-gray-600">
              ¿No te has registrado?{" "}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      );
} 
export default LoginPage