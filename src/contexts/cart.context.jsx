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
export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    count : 0
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [count, setcount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(() => {
        const new_counter = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
        setcount(new_counter);

    }, [cartItems])


    const value = {isCartOpen, setIsCartOpen,addItemToCart, cartItems,count};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}