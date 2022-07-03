import React from 'react';
import '../styles/components/Success.scss'
const Success = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Oscar, gracias por tu compra</h2>
                <span>Tu pedido llegará a 3 días a tu dirección:</span>
                <div className="Success-map">
                    Google maps
                </div>
            </div>
        </div>
    );
};

export default Success;