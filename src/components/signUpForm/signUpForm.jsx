import { useState } from "react";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setformFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);
    
    const handleChange = ({target: {value, name}}) => {
        setformFields({...formFields, [name]: value})
    }
    
    return (
        <div>
            <h1>Sign up with you email and password</h1>
            <form onSubmit={() => {}}>
                
                <label>Display Name</label>
                <input type="text" name="displayName" onChange={handleChange} value={displayName} required/>
                
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} value={email} required/>
                
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} value={password} required/>
                
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} required/>
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
export default SignUpForm;
