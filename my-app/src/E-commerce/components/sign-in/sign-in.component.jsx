import { useState} from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.css';


const defaultFormField = {
    email : '',
    password : '',

}

export default function SignInForm(){

    const [formFields, setFormFields] = useState(defaultFormField);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const signInWithGoogle = async () => { 
        await signInWithGooglePopup();
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            
            resetFormFields();

        } catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }         
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]:value})
    };

    return(
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email'
                    value={email} />

                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password'
                    value={password} />

                <div className="buttons-container">
                    {/* <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button> */}
                    <input className="button-container" type="button" value='Log In'/>

                </div>
            </form>
        </div>
    );
}
