import { Fragment } from "react";
import { Outlet ,Link} from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { NavigationContainer ,
         NavLinks,
         NavLink,
        LogoContainer} from "./navigation.styles";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../Component/card-icon/card-icon.component";
import CartDropDown from "../../Component/card-dropdown/card-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () =>{


  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);


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