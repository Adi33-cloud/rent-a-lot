import './LoginSignUp.css';
import InputField from './InputField'
function Login() {

    return (
        <div style={{ width: "30%", height: "250px", background: "#bec2bf" }}>
            <p>Login</p>
            <InputField textId="lusername" displayText="Username" />
            <InputField textId="lpassword" displayText="Password" />
            <button>Login</button>
        </div>
    );
}

export default Login;