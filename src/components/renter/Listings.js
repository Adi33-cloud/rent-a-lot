import React, { useState } from 'react';
import './Renter.css';
import InputField from '../login-signup/InputField';
import ViewListingsDetailsModal from '../modals/ViewListingDetailsModal';

function Listings({ listingName, address, rate, description, renterID, amenities }) {
    const [modalOpen, setModalOpen] = useState(false);

    console.log("this is modalOpen:", modalOpen)
    if (modalOpen === true) {
        return <ViewListingsDetailsModal amenities={amenities} listingName={listingName} address={address} rate={rate} description={description} renterID={renterID} closeFunction={setModalOpen} />

    }

    return (
        <div style={{ display: 'flex', borderBottom: 'solid', background: '#fff' }}>
            <div>
                <h4 style={{ marginLeft: '-18%' }}>{listingName}</h4>
                <p style={{ color: '#42c8f5', display: 'inline', marginRight: '5px' }}>{address}</p>
                <p style={{ display: 'inline' }}>{rate}$/day</p>
            </div>
            <div>
                <button onClick={() => setModalOpen(true)} style={{ backgroundColor: '#42c8f5', height: '50%', width: '60%', margin: '15px', border: 'solid', borderWidth: '0.1px' }}>View</button>
            </div>
        </div>
    );
}

export default Listings;