import './check-out.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckOut = () =>{
    const {cartItems} = useContext(CartContext);
    const {addItemToCart} = useContext(CartContext);
    const {removeItemFromCart} = useContext(CartContext);
    return (
        <div>
            {cartItems.map((items) => {
                const {id ,name, price, quantity} = items;
                return(
                    <div key ={id}>
                      <h2>{name}</h2>
                      <span>{quantity}</span>
                      <br/>
                      <span onClick={() => addItemToCart(items)}>increament</span>
                      <br/>
                      <span onClick={() => removeItemFromCart(items)}> decreament</span>
                      <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckOut;