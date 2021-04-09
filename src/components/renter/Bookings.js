import React, { useState } from 'react';
import './Renter.css';
import ViewBookingBeforeRenterModal from '../modals/ViewBookingBeforeRenterModal';
import ViewBookingAfterRenterModal from '../modals/ViewBookingAfterRenterModal';
import ViewBookingAfterListerModal from '../modals/ViewBookingListerModal';


function Bookings({ reservationID, listingName, startDate, endDate, description, address, amenities, review }) {

    const [modalOpen, setModalOpen] = useState(false);

    console.log("this is modalOpen:", modalOpen)
    if (modalOpen === true) {
        //return <ViewBookingBeforeRenterModal listingName={listingName} address="1234 made up address street" description="bad description" closeFunction={setModalOpen} />
        return <ViewBookingAfterRenterModal review={review} amenities={amenities} reservationID={reservationID} listingName={listingName} address={address} description={description} startDate={startDate} endDate={endDate} closeFunction={setModalOpen} />
        //return <ViewBookingAfterListerModal listingName="Best Venue ever" address="1234 random address street NW" closeFunction={setModalOpen} />

    }

    return (
        <div style={{ display: 'flex', borderBottom: 'solid', background: '#fff' }}>
            <div>
                <h4 style={{ marginLeft: '-18%' }}>{listingName}</h4>
                <p style={{ color: '#42c8f5', display: 'inline', marginRight: '5px' }}>{startDate}-{endDate}</p>
            </div>
            <div>
                <button onClick={() => setModalOpen(true)} style={{ backgroundColor: '#42c8f5', height: '50%', width: '70%', margin: '15px', border: 'solid', borderWidth: '0.1px' }}>Details</button>
            </div>
        </div>
    );
}

export default Bookings;