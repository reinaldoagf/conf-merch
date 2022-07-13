import { useEffect, useState } from "react";
import axios from 'axios';
import initialState from '../initialState';
const API = `http://localhost:1337/api/products?populate=*`;
const API_PROD = `http://us-central1-gndx-fake-api.cloudfunctions.net/api/products`
const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [products,setProducts] = useState([]);
    useEffect(() => {
        // Create an scoped async function in the hook
        async function getProducts() {
          const response = await axios(API_PROD);
          console.log(response)
          setProducts(response.data.data);
        }
        // Execute the created function directly
        getProducts();
      }, [])
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
        products,
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder
    }
}

export default useInitialState;