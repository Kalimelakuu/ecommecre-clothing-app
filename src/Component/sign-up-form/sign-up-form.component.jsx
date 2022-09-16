import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.style.scss';
import Button from "../button/button.component";


const defaultFormFields = {
    displayedName : '',
    email :'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayedName , email, password, confirmPassword} = formFields;

    
    const resetFormField= () => {
        setFormFields(defaultFormFields);
    }
   

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayedName});
            resetFormField();
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }else{
                console.log("user creation encountered an error", err);
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
        <h2> Don't Have An Account ?</h2>
        <span>Sign up with your email and password</span>
           <form onSubmit={handleSubmit}>
             
              <FormInput 
                   label ='Display Name'
                   type='text' required  onChange={handleChange} name='displayedName' value={displayedName}/>

              <FormInput
                   label ='Email'
                   type='email' required onChange={handleChange} name='email' value={email} />

              
              <FormInput
                    label ='Password' 
                    type='password' required onChange={handleChange} name='password' value={password} />
                            
              <FormInput 
                  label ='confirmPassword'
                  type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

              <Button  type="submit">Sign Up</Button>
           </form>
        
        </div>
    )
}

export default SignUpForm;