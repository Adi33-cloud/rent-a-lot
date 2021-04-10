import UserInforamtion from '../renter/UserInformation';
import MyListings from './MyListings';
import ViewBookings from './ViewBookings';
import React, { useState, useEffect } from 'react';

function Lister( {match}) {

    const [user, setUser] = useState({username:"", firstName:"", lastName:""});

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/listers/' + match.params.user + '/';

            const response = await fetch(
                endPoint
            );
            const json = await response.json();

            console.log(json);
            
            setUser(json);

            return json;
        } catch {
            console.log("Incorrect user");
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px' }}>
            <div style={{ display: 'flex' }}>
                <img src="https://cdn.discordapp.com/attachments/800435059731202078/825523607157211176/YAAAAASUVORK5CYII.png" alt="Logo" width="100" height="100"></img>
                <h1 style={{ fontFamily: 'Cursive', color: '#42c8f5' }}>  Rent-a-Lot</h1>
            </div>
            <UserInforamtion username={user.username} firstName={user.firstName} lastName={user.lastName}/>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <MyListings username={user.username} />
                <ViewBookings username={user.username} />

            </div>

        </div>
    );
}

export default Lister;
