import { createContext, useContext, useState } from 'react';
import { createProductRequest, getProductsRequest, deleteProductRequest, getProductRequest } from '../api/products';

const ProductContext = createContext();

export const useProducts= () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
}

export function ProductsProvider({ children }) 
{
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try{
            const res = await getProductsRequest();
        console.log(res);
        setProducts(res.data.products);
        }catch(error){
            console.error(error,' Error al obtener productos');
            
        }
    }



const createProduct = async (product) => {
     const res = await createProductRequest(product);
     console.log(res);

    
}

const deleteProduct = async (id) => {

    try{
        const res = await deleteProductRequest(id);
        getProducts();
    }catch(error){
        console.error(error, 'Error al eliminar producto');

    }
}


    return (
    <ProductContext.Provider value={{
        products,
        createProduct,
        getProducts,
        deleteProduct,
        
    }}>
        {children}
        </ProductContext.Provider>
    );
}