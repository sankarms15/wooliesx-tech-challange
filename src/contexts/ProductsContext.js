/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import configs from '../config';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const productUrl = configs.apiUrls.getProduct;
    const [products, setProducts] = useState([]);

    async function getProducts() {
        try {
            const response = await fetch(productUrl);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
               
            const data = await response.json();
            setProducts(data);
        } catch (err) {
           console.log(err);
        }        
    }

    useEffect(() => {
        getProducts();
    }, []);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;