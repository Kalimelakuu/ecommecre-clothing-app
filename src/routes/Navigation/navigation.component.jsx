import { Fragment } from "react";
import { Outlet ,Link} from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
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
        <div className="navigation">
           <Link className='logo-container' to='/'>
              <CrownLogo className="logo"/>
           </Link>
          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
             {currentUser ? (
               <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>
             ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
             )}

             <CardIcon/>
          </div>
          {isCartOpen && <CartDropDown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }


export default Navigation;