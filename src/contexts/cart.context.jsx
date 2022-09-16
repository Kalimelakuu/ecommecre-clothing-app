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

const clearCartItem = (cartItems , cartItemsToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemsToClear.id);
}
export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    count : 0,
    removeItemFromCart : () => {},
    cancelItemFromCart : () => {},
    total :0
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [count, setcount] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemsToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemsToRemove));
    }

    const clearItemFromCart = (cartItemsToCancel) => {
        setCartItems(clearCartItem(cartItems, cartItemsToCancel));
    }

    useEffect(() => {
        const new_counter = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
        setcount(new_counter);

    }, [cartItems])

    useEffect(() => {
        const new_counter = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0);
        setcartTotal(new_counter);

    }, [cartItems])


    const value = {isCartOpen, setIsCartOpen,addItemToCart, cartItems,count,removeItemFromCart,clearItemFromCart,cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}