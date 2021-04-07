import './Renter.css';
import Bookings from './Bookings';

function MyBookings() {

    return (
        <div style={{ background: '#e6e6e6', marginTop: '25px', marginLeft: '50px' }}>
            <h3>My Bookings</h3>
            <div style={{ height: '300px', border: 'solid', overflow: 'scroll' }}>
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />
                <Bookings listingName="Large Barn, 200 sqtf" startDate="25 April 2021" endDate="27 April 2021" />


            </div>

        </div>
    );
}

export default MyBookings;