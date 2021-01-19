import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Product = () => {
    
    return ( 
        <Layout title="Producttore" description="This is the Product list page" >
            <div >
                <div className="text-center mt-5">
                    <h1>List of product</h1>
                    <p>Welcome to Sankar Tech challange.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Product;