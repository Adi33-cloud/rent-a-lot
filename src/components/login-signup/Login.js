import './LoginSignUp.css';
import InputField from './InputField'
import React, { useState, useEffect } from 'react';

function Login() {

    const sendLogin = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/login/?username=' + lUsername + '&password=' + lPassword;

            const response = await fetch(
                    endPoint
                );
                const json = await response.json();
                console.log(json);

            return json;
        } catch {
            console.log("error");
        }
    }

    const [lUsername, setLUsername] = useState("");
    const [lPassword, setLPassword] = useState("");

    return (
        <div style={{ width: "30%", height: "250px", background: "#bec2bf" }}>
            <p>Login</p>
            <InputField textId="lusername" displayText="Username" setText={setLUsername} />
            <InputField textId="lpassword" displayText="Password" setText={setLPassword} />
            <button onClick={sendLogin}>Login</button>
        </div>
    );
}

export default Login;