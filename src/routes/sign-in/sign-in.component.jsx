import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SingUpForm from "../sign-up-form/sign-up-form.component";
const SignIn  = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const newuser = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
           <h1>This is Sign In Page</h1>
           <button onClick={logGoogleUser}>Sign In With Google</button>
           <SingUpForm/>
        </div>
    )
} 

export default SignIn;