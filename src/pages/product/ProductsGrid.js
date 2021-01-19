import React, { useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';
import { useState } from 'react';

const ProductsGrid = () => {

    const { products } = useContext(ProductsContext);

    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(() => {
        setFilteredProduct(products);
    }, [products]);

    const handleOnInputChange = ( event ) => {
        const query = event.target.value;    
        if (query) {
            const newProducts = filteredProduct.filter((item) => (
                item.name.toLocaleLowerCase().includes(query)
            ));
            setFilteredProduct(newProducts);
        } else {
            setFilteredProduct(products);
        }
    };

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {filteredProduct.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" onChange={handleOnInputChange} className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

                {
                    filteredProduct.map((product) => (
                        <ProductItem key={product.productId} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;