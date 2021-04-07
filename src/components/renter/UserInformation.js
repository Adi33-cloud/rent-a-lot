import './Renter.css';

function UserInforamtion({ username, firstName, lastName }) {

    return (
        <div className="userInformationContainer">
            <div className="userInformationChildContainer">
                <p className="pHeader">Username: </p><p>{username}</p><br></br><br></br>
            </div>
            <div className="userInformationChildContainer">
                <p className="pHeader">First Name: </p><p>{firstName}</p><br></br><br></br>
            </div>
            <div className="userInformationChildContainer">
                <p className="pHeader">Last Name: </p><p>{lastName}</p><br></br><br></br>
            </div>
        </div>
    );
}

export default UserInforamtion;