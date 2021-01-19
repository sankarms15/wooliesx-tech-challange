import React, { createContext, useReducer } from 'react';
import configs from '../config';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext()

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false, error: false };

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    async function checkout() {
        const checkouturl = configs.apiUrls.checkout;
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state.cartItems)
            };
            const response = await fetch(checkouturl, requestOptions);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            dispatch({type: 'CHECKOUT'});
        } catch (err) {
           console.log(err);
        }  
    }

    const handleCheckout = () => {
        checkout();
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;
