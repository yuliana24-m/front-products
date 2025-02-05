import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function ProductPage() {
  const { getProducts, products, deleteProduct } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);




  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #333333, #000000)', // Degradado de gris a negro
      }}
    >
      {Array.isArray(products) && products.length > 0 ? (
        <table
          border="0"
          cellPadding="10"
          cellSpacing="0"
          style={{
            width: '80%',
            borderCollapse: 'collapse',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#1a202c',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: '#2d3748',
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              <th
                style={{
                  padding: '12px',
                  fontSize: '16px',
                  textAlign: 'left',
                }}
              >
                Codigo
              </th>
              <th
                style={{
                  padding: '12px',
                  fontSize: '16px',
                  textAlign: 'left',
                }}
              >
                Nombre
              </th>
              <th
                style={{
                  padding: '12px',
                  fontSize: '16px',
                  textAlign: 'left',
                }}
              >
                Descripción
              </th>
              <th
                style={{
                  padding: '12px',
                  fontSize: '16px',
                  textAlign: 'left',
                }}
              >
                Precio
              </th>
              <th
                style={{
                  padding: '12px',
                  fontSize: '16px',
                  textAlign: 'left',
                }}
              >
                Stock
              </th>
              <th
                style={{
                  padding: '12px',
                  fontSize: '16px',
                  textAlign: 'center',
                }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                style={{
                  backgroundColor: '#2d3748',
                  borderBottom: '2px solid #4a5568',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#4a5568')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#2d3748')}
              >
                <td
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    color: '#e2e8f0',
                    borderLeft: '1px solid #4a5568',
                    borderRight: '1px solid #4a5568',
                  }}
                >
                  {product.code}
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    color: '#e2e8f0',
                    borderLeft: '1px solid #4a5568',
                    borderRight: '1px solid #4a5568',
                  }}
                >
                  {product.name}
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    color: '#e2e8f0',
                    borderLeft: '1px solid #4a5568',
                    borderRight: '1px solid #4a5568',
                  }}
                >
                  {product.description}
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    color: '#e2e8f0',
                    borderLeft: '1px solid #4a5568',
                    borderRight: '1px solid #4a5568',
                  }}
                >
                  ${product.price.toFixed(2)}
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    color: '#e2e8f0',
                    borderLeft: '1px solid #4a5568',
                    borderRight: '1px solid #4a5568',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                  }}
                >
                  {product.stock}
                </td>
                <td
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    color: '#e2e8f0',
                    borderLeft: '1px solid #4a5568',
                    borderRight: '1px solid #4a5568',
                    textAlign: 'center',
                  }}
                >
                  <Link
                    to={`/products/${product._id}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#38a169',
                      cursor: 'pointer',
                      marginRight: '10px',
                    }}
                  >
                    <FaEdit size={18} />
                  </Link>
                  <button
                    onClick={() => {
                      deleteProduct(product._id);
                    }}                
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#e53e3e',
                      cursor: 'pointer',
                    }}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ fontSize: '18px', color: '#666', textAlign: 'center' }}>No products available.</p>
      )}
    </div>
  );
}

export default ProductPage;
