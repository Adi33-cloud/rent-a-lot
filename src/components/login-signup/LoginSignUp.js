import './LoginSignUp.css';
import InputField from './InputField';
import Login from './Login';
import SignUp from './SignUp';

function LoginSignUp() {
    return (
        <div>
            <h1 style={{ fontFamily: 'Cursive', color: '#42c8f5' }}>  Rent-a-Lot</h1>
            <img src="https://cdn.discordapp.com/attachments/800435059731202078/825523607157211176/YAAAAASUVORK5CYII.png" alt="Logo" width="100" height="100"></img>
            <div className="container">

                <Login />
                <SignUp />

            </div>
        </div>
    );
}

export default LoginSignUp;
