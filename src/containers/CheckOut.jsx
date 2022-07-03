import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/CheckOut.scss'
const CheckOut = () => {
    const {state, removeFromCart} = useContext(AppContext);
    const {cart} = state;

    const handleRomoveFromCart = (product) => {
        removeFromCart(product)
    }
    const handleSumTotal = () => {
        return cart.reduce((acum,current) => acum + current.price,0);
    }
    return (
        <div className="Checkout">
            <div className="Checkout-content">
            {
                cart.length > 0 ? 
                <h3>Lista de pedidos</h3> : 
                <h3>Sin pedidos</h3>
            }
                
                {cart.map(e =>(
                    <div key={`item-${e.id}`} className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{e.title}</h4>
                            <span>${e.price}</span>
                        </div>
                        <button type='button' onClick={() =>{handleRomoveFromCart(e)}}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                ))}
                
            </div>
            {
                cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>Precio total: ${handleSumTotal()}</h3>
                        <Link to="/checkout/information">
                            <button type='button'>Continuar pedido</button>
                        </Link>
                    </div>
                )
            }
            
        </div>
    );
};

export default CheckOut;