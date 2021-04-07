import './Renter.css';
import InputField from '../login-signup/InputField';
import Listings from './Listings';

function ViewListings() {

    return (
        <div style={{ background: '#e6e6e6', marginTop: '25px' }}>
            <h3>View Listings</h3>
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

        </div>
    );
}

export default ViewListings;