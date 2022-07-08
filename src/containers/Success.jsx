import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.scss';
const Success = () => {
    const {state}= useContext(AppContext);
    const {buyer} = state;
    return (
        <div className="Success">
            <div className="Success-content">
                {buyer?.name && <h2>{`${buyer.name}, gracias por tu compra`}</h2> }
                <span>Tu pedido llegará a 3 días a tu dirección:</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Success;