import React, {useContext} from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.scss'
const Products = () => {
    const {state, products,addToCart} = useContext(AppContext);
    const handleAddToCart= e => {
        addToCart(e)
    }
    return (
        <div className='Products'>
            <div className='Products-items'>
                {products.map(e => <Product key={e.id} product={e} handleAddToCart={handleAddToCart} />  )}
            </div>
        </div>
    );
};

export default Products;