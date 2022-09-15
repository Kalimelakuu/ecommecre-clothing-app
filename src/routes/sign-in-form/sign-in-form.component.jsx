import Button from "../../Component/button/button.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignInPage = () =>{
    return (<div>
        <Button buttonType='google' type="submit" 
           onClick={signInWithGooglePopup}  >Sign In with Google</Button>
            </div>)
}

export default SignInPage;