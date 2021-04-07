import './LoginSignUp.css';
import InputField from './InputField'
function SignUp() {

    return (
        <div style={{ width: "30%", background: "#bec2bf" }}>
            <p>Sign Up</p>
            <InputField textId="susername" displayText="Username" />
            <InputField textId="spassword" displayText="Password" />
            <InputField textId="firstName" displayText="First name" />
            <InputField textId="lastName" displayText="Last name" />
            <div>
                <label for="role">Role:</label>
                <select name="users" id="users">
                    <option value="none">None</option>
                    <option value="renter">Renter</option>
                    <option value="lister">Lister</option>
                </select>
            </div>
            <button>Sign Up</button>
        </div>
    );
}

export default SignUp;