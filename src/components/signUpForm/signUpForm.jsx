import './signUpForm.scss';

import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../formInput/formInput";
import Button from '../button/button';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setformFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    //console.log(formFields);

    const resetFormField = () => {
        setformFields(defaultFormFields);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password do not match");
            return;
        }

        createAuthUserWithEmailAndPassword(email, password).then(({user}) => {    
            console.log(user);
            
            createUserDocumentFromAuth(user, {displayName}).then(result => {

                resetFormField();
            });
        }).catch(error => {
            console.error('USER CREATION ERROR',error);
            if(error.code === 'auth/email-already-in-use') {
                alert("email already in use");
            }
        });
        
    }
    
    const handleChange = ({target: {value, name}}) => {
        setformFields({...formFields, [name]: value})
    }
    
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with you email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name"
                    type="text" 
                    name="displayName" 
                    onChange={handleChange} 
                    value={displayName} 
                    required
                />
                <FormInput 
                    label="Email"
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={email} 
                    required
                />
                <FormInput 
                    label="Password"
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={password} 
                    required
                />
                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    name="confirmPassword" 
                    onChange={handleChange} 
                    value={confirmPassword} 
                    required
                />
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}
export default SignUpForm;
