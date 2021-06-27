
import {uri} from '../../api/productapi'
import axios from 'axios';
const CART_ADD_ITEM = 'CART_ADD_ITEM';
 const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
 const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS';
 const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD';
const CART_EMPTY = 'CART_EMPTY';



// when we define an action function, it should return an async function with dispatch 
// disptach and getState are redux-thunk functions to get access to redux store
export const addToCart = (id, qty) => async (dispatch, getState) => {
    // data (product) is deconstructed from axios return data
    const {data} = await axios.post(`${uri}/product/${id}`, {id})

    //using product data to dispatch 
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty
        }
    });

    //after adding items to cart, get cartItems from redux store using getState and store data in localStorage
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
};

//remove item from cart action 
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// saveShipping address 
export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
    //save shipping address to localStorage
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};


// savePaymentMethod action
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
};