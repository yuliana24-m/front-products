import { createContext, useState, useContext, useEffect} from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import { set } from "date-fns";
import { ca } from "date-fns/locale";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;

}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAutenticated, setIsAutenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
      try {

        const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAutenticated(true);
        
      } catch (error) {
        console.log(error.response);

        setErrors(error.response.data);
      }
            
        }
        const signin = async (user) => {
          try {
            const res = await loginRequest(user);
            console.log(res.data);
            setIsAutenticated(true); // Actualiza el estado de autenticación aquí
           
            setUser(res.data);

          } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
          }
        };


        const signout = () => {
          Cookies.remove('token');
          setUser(null);
          setIsAutenticated(false);
        }


    useEffect(() => {
      if (errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors([])
        }, 5000)
        return () => clearTimeout(timer)
      }
    }, [errors])



    useEffect(() => {
     async function checkLogin(){
        const cookies = Cookies.get();

          if (!cookies.token){
            setIsAutenticated(false);
            setLoading(false);
            return setUser(null);
          }
            try{
              const res =await verifyTokenRequest(cookies.token);
              console.log(res);
              if(!res.data){
                 setIsAutenticated(false);
                 setLoading(false);
                 return;
              }

              setIsAutenticated(true);
              setUser(res.data);
              setLoading(false);

            }catch (error){
              setIsAutenticated(false);
              setUser(null);
              setLoading(false);

            }
          
      }
        checkLogin();
    }, [])



        return (
  
          <AuthContext.Provider 
          
            value={{
                signup,
                signin,
                signout,
                user,
                isAutenticated,
                errors,
                loading
          }}>
            {children}
            </AuthContext.Provider>
        
          )
    }

  
