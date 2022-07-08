import { useState } from "react";
import initialState from '../initialState';
const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload ]
        })
    }
    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(e => e.id !== payload.id)
        })
    }
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: payload
        })
    }
    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }
    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder
    }
}

export default useInitialState;