import { signInWithGooglePopup } from '../../utils/firebase/firebase'

const SignIn = () => {
    const logGoogleUser = () => signInWithGooglePopup().then(response => {
        console.log(response);
        //return response;
    });


    return (
    <div>
        <h1>sign in</h1>
        <button onClick={logGoogleUser}>sign in with google</button>
    </div>
)};

export default SignIn;