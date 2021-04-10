import React, { useState, useEffect } from 'react';
import InputField from '../login-signup/InputField';
import Listings from '../renter/Listings';
import CreateListingModal from '../modals/CreateListingModal'

function MyListings({username}) {
    const [modalOpen, setModalOpen] = useState(false);

    const [listings, setListings] = useState({});

    useEffect(() => {
        getListings();
    }, [username])

    const getListings = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/listerproperties/?username=' + username;

            console.log(endPoint);

            const response = await fetch(
                endPoint
            );
            const json = await response.json();

            console.log(json);

            setListings(json);

            return json;
        } catch {
            console.log("No Properties found");

        }
    }

    //TODO: fix this if have time
    const displayProperties = () => {
        console.log(listings);
        if (Object.keys(listings).length > 1)
        {
            return (
                <div>
                    {listings.map((listing) => (
                        <Listings bookable={false} amenities={listing.amenities} listingName={listing.name} address={listing.address} rate={listing.price} renterID={username} description={listing.description} />
                    ))}
                </div>);
        }
        else return (<div></div>);
    }


    //console.log("this is modalOpen:", modalOpen)
    if (modalOpen === true) {
        return <CreateListingModal username={username} closeFunction={setModalOpen} />

    }

    return (

        <div style={{ background: '#e6e6e6', marginTop: '25px', }}>
            <h3>My Listings</h3>
            <div style={{ height: '300px', border: 'solid', overflow: 'scroll' }}>
                {displayProperties()}

            </div>

            <button onClick={() => setModalOpen(true)} style={{ background: '#42c8f5', margin: "5%", padding: '3%', border: 'solid', borderWidth: '0.1px' }}>Create Listing</button>

        </div>

    );
}

export default MyListings;