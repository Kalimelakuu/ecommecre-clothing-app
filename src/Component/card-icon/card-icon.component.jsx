import { ShoppingIcon, CartIconContainer, ItemCount} from './card-icon.styles';


import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount , selectIsCartOpen} from './../../store/cart/cart.selector';
import { setIsCartOpen } from './../../store/cart/cart.action';

const CardIcon = () => {
  const dispatch = useDispatch()
   
  const count = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggle = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
        <CartIconContainer onClick={toggle}>
          <ShoppingIcon className='shopping-icon' />
          <ItemCount>{count}</ItemCount>
          
        
        </CartIconContainer>
    )
}

export default CardIcon;