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
    </div>
)};

export default SignIn;