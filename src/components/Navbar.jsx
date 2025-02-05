import { Link } from 'react-router-dom'; // Importamos Link desde react-router-dom
import { useAuth } from '../context/AuthContext'; // Importamos el contexto de autenticación

function Navbar() {
    const {isAutenticated, signout} = useAuth(); // Obtenemos la función de cierre de sesión desde el contexto de autenticación
    
  const navStyle = {
    background: 'linear-gradient(90deg, #333, #666)',
    color: 'white',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    marginTop: '20px',
    marginBottom: '30px'
  };

  const navItemStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#444'
  };

       // Función para manejar el cierre de sesión
     const handleSignout = () => {
      signout(); // Llamar a la función de cierre de sesión
      navigate("/login"); // Redirigir al usuario a la página de login
  };

  return (
    <nav style={navStyle}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {isAutenticated ? (
            <>
                    
          
          <li style={navItemStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}> Ver Productos</Link>
          </li>
          
            <li style={navItemStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
                <Link to="/products/add-products" style={{ textDecoration: 'none', color: 'white' }} >Agregar Producto</Link>
            </li>
            <li style={navItemStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={handleSignout}>Cerrar sesion</Link>
            </li>
    
          
            </>
        ) : (
            <>
          <li style={navItemStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Iniciar sesion</Link>
          </li>
          <li style={navItemStyle} onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Registrarte</Link>
          </li>
            </>
        )}
        
     
      </ul>
    </nav>
  );
}

export default Navbar;
