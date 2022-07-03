import React from 'react';
import '../styles/components/CheckOut.scss'
const CheckOut = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de pedidos</h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>Item name</h4>
                        <span>$20</span>
                    </div>
                    <button type='button'>Eliminar</button>
                </div>
            </div>
            <div className="Checkout-sidebar">
                <h3>Precio total: $20</h3>
                <button type='button'>Continuar pedido</button>
            </div>
        </div>
    );
};

export default CheckOut;