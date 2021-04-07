import UserInforamtion from './UserInformation';
import ViewListings from './ViewListings';
import MyBookings from './MyBookings';
function Renter() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px' }}>
            <div style={{ display: 'flex' }}>
                <img src="https://cdn.discordapp.com/attachments/800435059731202078/825523607157211176/YAAAAASUVORK5CYII.png" alt="Logo" width="100" height="100"></img>
                <h1 style={{ fontFamily: 'Cursive', color: '#42c8f5' }}>  Rent-a-Lot</h1>
            </div>
            <UserInforamtion username="JonesieBoy99" firstName="John" lastName="Smith" />

            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                <ViewListings />
                <MyBookings />

            </div>

        </div>
    );
}

export default Renter;
