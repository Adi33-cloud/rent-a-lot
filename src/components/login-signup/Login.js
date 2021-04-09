import './LoginSignUp.css';
import InputField from './InputField'
import React, { useState, useEffect } from 'react';

import { useHistory  } from 'react-router-dom';

function Login() {

    const history = useHistory();

    const sendLogin = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/login/?username=' + lUsername + '&password=' + lPassword;

            const response = await fetch(
                endPoint
            );
            const json = await response.json();

            console.log(json);
            
            setLUser(json);

            if (json.numOfReservations === undefined)
            {
                history.push(`/lister/${json.username}`);
            }
            else
            {
                history.push(`/renter/${json.username}`);
            }

            

            return json;
        } catch {
            console.log("Incorrect username/password");
        }
    }

    const [lUsername, setLUsername] = useState("");
    const [lPassword, setLPassword] = useState("");

    const [lUser, setLUser] = useState();

    return (
        <div style={{ width: "30%", height: "250px", background: "#bec2bf" }}>
            <p>Login</p>
            <InputField textId="lusername" displayText="Username" setText={setLUsername} />
            <InputField textId="lpassword" displayText="Password" setText={setLPassword} />
            {/* <Link to={'/lister'}></Link> */}

            <button onClick={sendLogin}>Login</button>
            
        </div>
    );
}

export default Login;