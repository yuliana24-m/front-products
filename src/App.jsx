import React, { useEffect, useState } from "react";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import axios from "axios";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductPageAdd from "./pages/ProductPageAdd";
import ProtectedRoute from "./ProtectedRoute";
import { ProductsProvider } from "./context/ProductsContext";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
            
              <Route path="/products" element={<ProductPage/>} />
              <Route path="/products/add-products" element={<ProductPageAdd />} />
              <Route path="/products/:id" element={<ProductPageAdd />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
