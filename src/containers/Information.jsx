import React, {useRef,useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.scss';
const Information = () => {
    const {state, addToBuyer} = useContext(AppContext);
    const {cart} = state;
    const history = useHistory();
    const form = useRef(null);
    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            name:formData.get('name'),
            email:formData.get('email'),
            address:formData.get('address'),
            apto:formData.get('apto'),
            city:formData.get('city'),
            country:formData.get('country'),
            state:formData.get('state'),
            postal_code:formData.get('postal_code'),
            phone:formData.get('phone'),
        }
        addToBuyer(buyer)
        history.push('/checkout/payment')
    }
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder='Nombre completo' name="name" />
                        <input type="text" placeholder='Correo Electronico' name="email" />
                        <input type="text" placeholder='Dirección' name="address" />
                        <input type="text" placeholder='Apartamento' name="apto" />
                        <input type="text" placeholder='Ciudad' name="city" />
                        <input type="text" placeholder='País' name="country" />
                        <input type="text" placeholder='Estado' name="state" />
                        <input type="text" placeholder='Codigo postal' name="postal_code" />
                        <input type="text" placeholder='Telefono' name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">                        
                        <Link to="/checkout">
                            <button type='button'>Regresar</button>
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type='button' onClick={() => handleSubmit()}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(e =>(
                    <div key={`ìtem-${e.id}`} className="Information-item">
                    <div className="Information-element">
                        <h4>{e.title}</h4>
                        <span>${e.price}</span>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    );
};

export default Information;