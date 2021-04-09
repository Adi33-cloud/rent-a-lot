import React, { useState } from 'react';
import Modal from 'react-modal';
import InputField from '../login-signup/InputField';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#e6e6e6',
    }
};

Modal.setAppElement('#root')
function ViewListingsDetailsModal({ listingName, address, rate, description, closeFunction, renterID, amenities }) {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [length, setLength] = useState(0);

    const rent = async () => {
        try {

            var endPoint = 'http://127.0.0.1:8000/reservations/';

            let response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "address": 'http://127.0.0.1:8000/properties/' + address + '/',
                    "renterID": 'http://127.0.0.1:8000/renters/' + renterID + '/',
                    "startTime": startDate,
                    "endTime": endDate,
                    "length": parseInt(length)
                }),
            });

            let responseJson = await response;

            if (responseJson.status === 200) {
                console.log("Reservation made")
            }

            closeFunction();

            window.location.reload();

            return responseJson;
        } catch {
            console.log("error");
        }

    }

    //TODO: fix this if have time
    const showAmenities = () => {
        if (Object.keys(amenities).length > 1)
        {
            return (
                <div>
                    {amenities.map((amenity, index) => (
                        <div key={index} style={{ display: 'flex', borderBottom: 'solid', marginRight: '5%' }}>
                            <h2 style={{ display: 'inline', marginRight: '5%' }}>{amenity.amenityType}</h2>
                            <p style={{ display: 'inline' }}>{amenity.description}</p>
                        </div>
                    ))}
                </div>);
        }
        else return (<div></div>);
    }

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
                <h2 style={{ display: "inline" }}>{listingName}</h2>
                <button onClick={closeFunction} style={{ display: "inline", background: '#42c8f5', marginLeft: '10%', fontWeight: 'bold' }}>X</button>

                <h4 style={{ color: '#42c8f5' }}>{address}</h4>
                <p>{description}</p>
                <h2>Amenities</h2>
                <div style={{ width: '400px', height: '200px', overflow: 'scroll', background: '#fff' }}>
                    {showAmenities()}
                </div>

                <InputField textId="startDate" displayText="Start Date" setText={setStartDate} />
                <InputField textId="endDate" displayText="End Date" setText={setEndDate} />
                <InputField textId="length" displayText="Length of Stay" setText={setLength} />

                <div style={{ marginTop: '5%' }}>
                    <h2 style={{ display: "inline" }}>${rate}/Day</h2>
                    <button onClick={rent} style={{ width: '60px', height: '30px', display: "inline", marginLeft: '55%', background: '#42c8f5', fontWeight: 'bold' }}>Rent</button>

                </div>


            </Modal>
        </div>

    );
}

export default ViewListingsDetailsModal;