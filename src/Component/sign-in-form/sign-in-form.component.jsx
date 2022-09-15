import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-in-form.style.scss';
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email :'',
    password:'',
}



const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    
    const resetFormField= () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
    }
    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormField();
        }catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default : console.log(err);
                
            }
            
           
        }
        
    }
    const handleChange = (event) => {
        const {name , value } = event.target;

        setFormFields({ ...formFields, [name] : value
        })
    }
    return (
        <div className="sign-up-container">
        <h2> Already Have An Account ?</h2>
        <span>Sign In with your email and password</span>
           <form onSubmit={handleSubmit}>

              <FormInput
                   label ='Email'
                   type='email' required onChange={handleChange} name='email' value={email} />

              
              <FormInput
                    label ='Password' 
                    type='password' required onChange={handleChange} name='password' value={password} />
                            
              

              <div className="buttons-container">
                <Button  type="submit">Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google sign In</Button>
              </div>
           </form>
        
        </div>
    )
}

export default SignInForm;