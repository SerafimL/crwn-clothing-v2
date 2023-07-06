import { useState } from "react";
import Button from "../button/button";
import FormInput from "../formInput/formInput";
import "./signInForm.scss"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase";

const defaultCredentions = {
	email: '',
	password: '',
}

const SignInForm = () => {
	const [credentions, setCredentions] = useState(defaultCredentions);
	const {email, password} = credentions;

	const handleSubmit = (event) => {
        event.preventDefault();
        signInAuthUserWithEmailAndPassword(email, password).then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
            if(error.code === 'auth/wrong-password') {
                alert('incorrect password');
            }
            else if(error.code === 'auth/user-not-found') {
                alert('there is no account related to this email');
            }
        })
	}

    const logGoogleUser = () => signInWithGooglePopup().then(({user}) => {
        console.log('entrou no then 1');
        createUserDocumentFromAuth(user);
    }).catch(error => {
        console.log('entrou no catch 1');
        console.error(error);
    });
	
	const handleChange = ({target: {name, value}}) => {
		setCredentions({...credentions, [name]: value});
	}
	
	return(
		<div className="sign-in-container">
			<h2>Sign In</h2>
			<form onSubmit={handleSubmit}>
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
                <div className="sign-in-button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={logGoogleUser}>Sign-in Google</Button>
                </div>
            </form>
		</div>
	);
}
export default SignInForm;
