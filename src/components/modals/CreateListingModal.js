import Modal from 'react-modal';
import InputField from '../login-signup/InputField';
import React, { useState, useEffect } from 'react';

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
function CreateListingModal({ closeFunction, username }) {

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [details, setDetails] = useState("");
    const [capacity, setCapacity] = useState("");
    const [rate, setRate] = useState("");
    const [location, setLocation] = useState("");
    const [amenities, setAmenities] = useState("");

    const createListing = async () => {

        try {

            var endPoint = 'http://127.0.0.1:8000/properties/';

            let response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": title,
                    "address": address,
                    "capacity":  parseInt(capacity),
                    "price":  parseInt(rate),
                    "description": details,
                    "listerID": 'http://127.0.0.1:8000/listers/' + username + '/',
                    "cityName": 'http://127.0.0.1:8000/locations/' + location + '/',
                }),
            });

            let responseJson = await response;

            var amenitieList = amenities.split(',');

            amenitieList.map(async (amenitie) => {

                try {

                    var endPoint = 'http://127.0.0.1:8000/amenities/';

                    var diff = amenitie.split('-');
        
                    let response = await fetch(endPoint, {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "propertyAddress": 'http://127.0.0.1:8000/properties/' + address + "/",
                            "amenityType": diff[0],
                            "description": diff[1],

                        }),
                    });
                
                } catch {
                    console.log("error");
                }
            })

            if (responseJson.status === 200) {
                console.log("created")
            }

            window.location.reload();

            return responseJson;
        } catch {
            console.log("error");
        }
    }


    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
                <div style={{ display: 'flex' }}>
                    <InputField textId="title" displayText="Title" setText={setTitle}/>
                    <button onClick={closeFunction} style={{ height: '25px', display: "inline", background: '#42c8f5', marginLeft: '15%', fontWeight: 'bold', alignFont: 'center', alignSelf: 'center' }}>X</button>
                </div>
                <InputField textId="address" displayText="Address" setText={setAddress}/>
                <InputField textId="location" displayText="City Name" setText={setLocation}/>
                <InputField textId="details" displayText="Details" setText={setDetails}/>
                <InputField textId="capacity" displayText="Capacity" setText={setCapacity}/>
                <InputField textId="ratePerDay" displayText="Rate Per Day" setText={setRate}/>
                <p>Enter Ameneties (name-description)</p>
                <input style={{ width: '300px'}} type="text" id="amenities" name="amenities" onChange={(event) => setAmenities(event.target.value)} /><br></br>
                <button onClick={createListing} style={{ width: '80px', height: '35px', marginLeft: '30%', marginTop: '10%', background: '#42c8f5', fontWeight: 'bold' }}>Create</button>


            </Modal>
        </div>

    );
}

export default CreateListingModal;