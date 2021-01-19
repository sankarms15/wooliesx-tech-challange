/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase, clearCart } = useContext(CartContext);    

    useEffect(() => {
        if (cartItems.length === 0) {
            clearCart();
        }
    }, []);

    const isInCart = product => {
        return !!cartItems.find(item => item.productId === product.productId);
    }

    return ( 
        <div className="card card-body">
            <p>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.audPrice)}</h3>
            <div className="text-right">
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-secondary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-success btn-sm">Add to cart</button>
                }
            </div>
        </div>
     );
}
 
export default ProductItem;