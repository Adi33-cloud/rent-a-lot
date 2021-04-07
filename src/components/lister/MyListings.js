import React, { useState } from 'react';
import InputField from '../login-signup/InputField';
import Listings from '../renter/Listings';
import CreateListingModal from '../modals/CreateListingModal'

function MyListings() {
    const [modalOpen, setModalOpen] = useState(false);

    //console.log("this is modalOpen:", modalOpen)
    if (modalOpen === true) {
        return <CreateListingModal closeFunction={setModalOpen} />

    }

    return (

        <div style={{ background: '#e6e6e6', marginTop: '25px', }}>
            <h3>My Listings</h3>
            <InputField textId="search" displayText="Search" />
            <div style={{ height: '300px', border: 'solid', overflow: 'scroll' }}>
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />
                <Listings listingName="1500 sqft Conference Venue" address="180 Brown St NW New York" rate="200" />


            </div>

            <button onClick={() => setModalOpen(true)} style={{ background: '#42c8f5', margin: "5%", padding: '3%', border: 'solid', borderWidth: '0.1px' }}>Create Listing</button>

        </div>

    );
}

export default MyListings;