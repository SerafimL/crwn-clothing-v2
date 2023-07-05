import SignUpForm from '../../components/signUpForm/signUpForm';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
} from '../../utils/firebase/firebase'

const SignIn = () => {
    const logGoogleUser = () => signInWithGooglePopup().then(({user}) => user).then(user => {
        createUserDocumentFromAuth(user);
    });


    return (
    <div>
        <h1>sign in</h1>
        <button onClick={logGoogleUser}>sign in with google popup</button>
        <SignUpForm/>
    </div>
)};

export default SignIn;