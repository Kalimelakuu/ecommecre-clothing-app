import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './card-dropdown.style.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container '>
           <div className='cart-items '/>
           { cartItems.length ?
            (cartItems.map(item => 
                 (<CartItem key={item.id} cartItem={item}/>))) :
                 (<span className='empty-message'>Your cart is empty</span>)
           }
           
           <Button>GO TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropDown