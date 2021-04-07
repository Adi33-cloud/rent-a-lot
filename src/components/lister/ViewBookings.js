import React, { useState } from 'react';
import Bookings from '../renter/Bookings';

function ViewBookings() {

    const [modalOpen, setModalOpen] = useState(false);

    //console.log("this is modalOpen:", modalOpen)
    // if (modalOpen === true) {
    //     return <ViewBookingAfterListerModal listingName="Best Venue ever" address="1234 random address street NW" closeFunction={setModalOpen} />

    // }

    return (
        <div style={{ background: '#e6e6e6', marginTop: '25px', marginLeft: '50px' }}>
            <h3>View Bookings</h3>
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

export default ViewBookings;