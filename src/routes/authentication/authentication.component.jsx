import SignUpForm from "../../Component/sign-up-form/sign-up-form.component";
import SignInForm from "../../Component/sign-in-form/sign-in-form.component";
import './authentication.style.scss';


const Authentication  = () => {

   
    return (
        <div className="authentication-container">
           <SignInForm/>
           <SignUpForm/>
        </div>
    )
} 

export default Authentication;