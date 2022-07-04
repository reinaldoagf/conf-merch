import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from '../context/AppContext';
import '../styles/components/Payment.scss';

const Payment = () => {
    const history = useHistory();
    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer, orders } = state;
    const paypalOptions = {
        clientId: 'ASPyHh4ELftFk0Kj5KLerq3X1HDAtU2dX10j64QL-uzFzLdV29IhlBu3uiR5eX1uXoUdSgHkl0viPOLQ',
        intent: 'capture',
        currency: 'USD'
    }
    const paypalStyles = {
        layout: 'vertical',
        shape: 'rect'
    }
    const getSumTotal = () => {
        return cart.reduce((acum, current) => acum + current.price, 0);
    }
    const handlePaymentSuccess = (data) => {
        console.log('data:', data)
        addNewOrder({
            buyer,
            products: cart,
            payment: data
        })
        console.log('orders:',orders)
        history.push('/checkout/success')
    }
    const handlePaymentError = (error) => {
        alert("Transaction error ");
        console.log(error)
    }
    const handlePaymentCancel = (data) => {
        alert(`Pago Cancelado`);
        console.log(data);
    }
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.length > 0 && (<ul>
                    {cart.map(e => (
                        <li key={`item-${e.id}`} >
                            <div className="Payment-item">
                                <div className="Payment-element">
                                    <h4>{e.title}</h4>
                                    <span>
                                        $ {' '} {e.price}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>)}
            </div>

            <div className="Payment-button">
                <PayPalButton
                    amount={getSumTotal()}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => handlePaymentSuccess(data)}
                    onError={(error) => handlePaymentError(error)}
                    onCancel={(data) => handlePaymentCancel(data)}
                    options={paypalOptions}
                    style={paypalStyles}
                />
            </div>
        </div>
    );
};

export default Payment;