import React, { useState, useEffect } from 'react';
import Bookings from '../renter/Bookings';

function ViewBookings({username}) {

    const [modalOpen, setModalOpen] = useState(false);

    const [bookings, setBookings] = useState({});

    useEffect(() => {
        getBookings();
    }, [username])

    const getBookings = async () => {

        try {

            console.log(username);
            var endPoint = 'http://127.0.0.1:8000/listerreservations/?username=' + username;

            console.log(endPoint);

            const response = await fetch(
                endPoint
            );
            const json = await response.json();

            console.log(json);

            setBookings(json);

            return json;
        } catch {
            console.log("No Properties found");

        }
    }

    // //TODO: fix this if have time
    const displayBookings = () => {
        if (Object.keys(bookings).length > 1)
        {
            console.log(bookings);
            return (
                <div>
                    {bookings.map((booking) => (
                        <Bookings cost={booking.payment.amount} isLister={true} reservationID={booking.pk} review={booking.review} listingName={booking.address.name} startDate={booking.startTime} endDate={booking.endTime} description={booking.address.description} address={booking.address.address} amenities={booking.address.amenities} />
                    ))}
                </div>);
        }
        else return (<div></div>);
    }

    return (
        <div style={{ background: '#e6e6e6', marginTop: '25px', marginLeft: '50px' }}>
            <h3>View Bookings</h3>
            <div style={{ height: '300px', border: 'solid', overflow: 'scroll' }}>
                {displayBookings()}


            </div>

        </div>
    );
}

export default ViewBookings;