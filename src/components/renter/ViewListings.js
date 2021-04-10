import './Renter.css';
import InputField from '../login-signup/InputField';
import Listings from './Listings';
import React, { useState, useEffect } from 'react';

function ViewListings({renterID}) {

    const [search, setSearch] = useState("");
    const [properties, setProperties] = useState({});
    const [foundProperties, setFoundProperties] = useState(false);

    useEffect(() => {
        getListings();
    }, [search])

    const getListings = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/searchproperties/?cityName=' + search;

            const response = await fetch(
                endPoint
            );
            const json = await response.json();

            console.log(json);

            setProperties(json);
            setFoundProperties(true);

            return json;
        } catch {
            console.log("No Properties found");
            setFoundProperties(false);
        }
    }

    //TODO: fix this if have time
    const displayProperties = () => {
        console.log(properties);
        console.log(Object.keys(properties).length);
        if (Object.keys(properties).length > 1)
        {
            return (
                <div>
                    {properties.map((property) => (
                        <Listings bookable={true} amenities={property.amenities} listingName={property.name} address={property.address} rate={property.price} renterID={renterID} description={property.description} />
                    ))}
                </div>);
        }
        else return (<div></div>);
    }

    

    return (
        <div style={{ background: '#e6e6e6', marginTop: '25px' }}>
            <h3>View Listings</h3>
            <InputField textId="search" displayText="Search" setText={setSearch} />
            <div style={{ height: '300px', border: 'solid', overflow: 'scroll' }}>

                {displayProperties()}

            </div>

        </div>
    );
}

export default ViewListings;