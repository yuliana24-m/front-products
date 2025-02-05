import { useForm } from 'react-hook-form';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de que este import esté presente
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const { 
    register, 
    handleSubmit, 
    formState:{errors}
  } = useForm();
  const { signup, isAutenticated, errors: registerError } = useAuth();
  const navigate = useNavigate();

  //console.log(user);

  useEffect(() => {
    if(isAutenticated){
      navigate('/products') }
    }, [isAutenticated])


  const onSubmit = handleSubmit( async (values) =>{
    signup(values)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h1>
       

  {
    registerError.map((error, index) => (
      <div className="bg-red-500 p-2 text-white text-center " key={index}> 
      {error}
      </div>
    ))
  }

        <form
          onSubmit={onSubmit} // Asegurándonos de que el handleSubmit está ejecutando la función onSubmit
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input placeholder='Ingrese el nombre'
              id="name"
              {...register('name', { required: true })} // Asegurándonos de que esté registrado y el campo sea requerido
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div>
            <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">
              Cédula
            </label>
            <input placeholder='Ingrese la cédula'
              id="cedula"
              {...register('cedula', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.cedula && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input placeholder='Usuario@ejemplo.com'
              id="email"
              type="email"
              {...register('email', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input placeholder='Ingrese la contraseña'
              id="password"
              type="password"
              {...register('password', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <button
            type="submit" // Asegúrate de que el tipo del botón sea 'submit'
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Registrarse
          </button>
        </form>

        {/* Enlace para redirigir a la página de login */}
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya te registraste?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
