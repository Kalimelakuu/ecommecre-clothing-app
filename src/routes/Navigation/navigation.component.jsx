import { Fragment } from "react";
import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { NavigationContainer ,
         NavLinks,
         NavLink,
        LogoContainer} from "./navigation.styles";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../Component/card-icon/card-icon.component";
import CartDropDown from "../../Component/card-dropdown/card-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import {useSelector , useDispatch} from 'react-redux'
import { selectIsCartOpen } from '../../store/cart/cart.selector.js'

import { signOutStart } from "../../store/user/user.action";


const Navigation = () =>{


  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch()

  const signOutUser = () => dispatch(signOutStart())
  console.log(currentUser === null);
  
    return (
      <Fragment>
        <NavigationContainer>
           <LogoContainer to='/'>
              <CrownLogo className="logo"/>
           </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink >
             {currentUser ? (
               <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>
             ) : (
              <NavLink  to='/auth'>
                SIGN IN
            </NavLink >
             )}

             <CardIcon/>
          </NavLinks>
          {isCartOpen && <CartDropDown/>}
      </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }


export default Navigation;