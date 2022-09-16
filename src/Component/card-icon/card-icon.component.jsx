import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './card-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CardIcon = () => {
  const {isCartOpen , setIsCartOpen} = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

    return(
        <div className='cart-icon-container' onClick={toggle}>
          <ShoppingIcon className='shopping-icon' />
          <span className='item-count'> 0</span>
          
        
        </div>
    )
}

export default CardIcon;