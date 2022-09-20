import { ShoppingIcon, CartIconContainer, ItemCount} from './card-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CardIcon = () => {
  const {isCartOpen , setIsCartOpen} = useContext(CartContext);
  const {count }= useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggle}>
          <ShoppingIcon className='shopping-icon' />
          <ItemCount>{count}</ItemCount>
          
        
        </CartIconContainer>
    )
}

export default CardIcon;