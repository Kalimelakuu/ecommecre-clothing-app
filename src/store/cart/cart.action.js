import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from './../../utils/reducers/reducers.utils';



const addCartItem = (cartItems , productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    if( existingCartItem){
        return cartItems.map((cartItem)=> 
        cartItem.id === productToAdd.id ? 
            { ...cartItem, quantity : cartItem.quantity + 1} : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity :1}];

}

const removeCartItem = (cartItems , cartItemsToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemsToRemove.id);

    if( existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id);
    }
    return cartItems.map((cartItem)=> 
        cartItem.id === cartItemsToRemove.id?
            { ...cartItem, quantity : cartItem.quantity - 1} : cartItem)

}

const clearCartItem = (cartItems , cartItemsToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemsToClear.id);
}
export const setIsCartOpen = (boolean) => 
   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
    }

export const removeItemFromCart = (cartItems ,cartItemsToRemove) => {
    const newCartItem =  removeCartItem(cartItems, cartItemsToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}

export const clearItemFromCart = (cartItems ,cartItemsToCancel) => {
    const newCartItem = clearCartItem(cartItems , cartItemsToCancel);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}

