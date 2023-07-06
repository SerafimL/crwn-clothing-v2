import SignUpForm from '../../components/signUpForm/signUpForm';
import SignInForm from '../../components/signInForm/signInForm';
import './authentication.scss';
const Authentication = () => {
    return (
    <div className="auth-container">
        <SignInForm/>
        <SignUpForm/>
    </div>
)};

export default Authentication;