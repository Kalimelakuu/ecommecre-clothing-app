import { createContext, useState } from "react";
import { useEffect } from "react";


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
export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    count : 0,
    removeItemFromCart : () => {}
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [count, setcount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemsToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemsToRemove));
    }

    useEffect(() => {
        const new_counter = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
        setcount(new_counter);

    }, [cartItems])


    const value = {isCartOpen, setIsCartOpen,addItemToCart, cartItems,count,removeItemFromCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}