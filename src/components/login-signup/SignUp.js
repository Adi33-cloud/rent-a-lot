import './LoginSignUp.css';
import InputField from './InputField'
import React, { useState, useEffect } from 'react';

function SignUp() {

    const captureSignUp = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/users/';
            if (sRole === "renter")
                endPoint ='http://127.0.0.1:8000/renters/'
            else if (sRole === "lister")
                endPoint = 'http://127.0.0.1:8000/listers/'

            let response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": sUsername,
                    "password": sPassword,
                    "firstName": sFirstName,
                    "lastName": sLastName,
                    "branchNumber": parseInt(sBranchNumber)
                }),
            });
            let responseJson = await response;

            if (responseJson.status === 200) {
                console.log("we did it ya!")
            }
            return responseJson;
        } catch {
            console.log("error");
        }
    }

    const [sUsername, setSUsername] = useState("");
    const [sPassword, setSPassword] = useState("");
    const [sFirstName, setSFirstName] = useState("");
    const [sLastName, setSLastName] = useState("");
    const [sBranchNumber, setSBranchNumber] = useState("");
    const [sRole, setSRole] = useState("");

    return (
        <div style={{ width: "30%", background: "#bec2bf" }}>
            <p>Sign Up</p>
            <InputField textId="susername" displayText="Username" setText={setSUsername} />
            <InputField textId="spassword" displayText="Password" setText={setSPassword} />
            <InputField textId="firstName" displayText="First name" setText={setSFirstName} />
            <InputField textId="lastName" displayText="Last name" setText={setSLastName} />
            <InputField textId="branchNumber" displayText="Branch Number" setText={setSBranchNumber} />
            <div>
                <label for="role">Role:</label>
                <select name="users" id="users" onChange={e => setSRole(e.target.value)} >
                    <option value="renter">Renter</option>
                    <option value="lister">Lister</option>
                </select>
            </div>
            <button onClick={captureSignUp} >Sign Up</button>
        </div>
    );
}

export default SignUp;