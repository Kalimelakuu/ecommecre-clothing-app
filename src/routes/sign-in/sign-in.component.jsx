import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn  = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const newuser = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
           <h1>This is Sign In Page</h1>
           <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
} 

export default SignIn;