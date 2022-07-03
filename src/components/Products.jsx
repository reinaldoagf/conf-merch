import React from 'react';
import Product from './Product';
import '../styles/components/Products.scss'
const Products = ({products}) => {
    return (
        <div className='Products'>
            <div className='Products-items'>
                {products.map(e => <Product key={e.id} product={e} />  )}
            </div>
        </div>
    );
};

export default Products;