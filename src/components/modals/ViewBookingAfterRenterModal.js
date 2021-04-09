import Modal from 'react-modal';
import InputField from '../login-signup/InputField';
import React, { useState } from 'react';

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
function ViewBookingAfterRenterModal({ reservationID, listingName, address, description, closeFunction, startDate, endDate, amenities, review }) {

    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");

    const postReview = async () => {
        try {

            var endPoint = 'http://127.0.0.1:8000/reviews/';

            console.log(reservationID);

            let response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "reservationID": 'http://127.0.0.1:8000/reservations/' + reservationID + '/',
                    "comments": comment,
                    "rating": parseInt(rating)
                }),
            });

            console.log(JSON.stringify({
                "address": 'http://127.0.0.1:8000/reservations/' + reservationID + '/',
                "comments": comment,
                "rating": parseInt(rating)
            }));

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
                <button onClick={closeFunction} style={{ display: "inline", background: '#42c8f5', marginLeft: '35%', fontWeight: 'bold' }}>X</button>

                <h4 style={{ color: '#42c8f5' }}>{address}</h4>
                <p>{description}</p>
                <h2>Amenities</h2>
                <div style={{ width: '400px', height: '125px', overflow: 'scroll', background: '#fff' }}>
                    {showAmenities()}
                </div>

                <p>{startDate}-{endDate}</p>

                <div style={{ marginTop: '5%', display: 'flex', alignContent: 'center', justifyContent: 'flex-start' }}>
                    <div>
                        {/* <label for="score">Score:</label> */}
                        {/* <select name="users" id="users" option>
                            <option value="none">None</option>
                            <option value="0/10">0/10</option>
                            <option value="1/10">1/10</option>
                            <option value="2/10">2/10</option>
                            <option value="3/10">3/10</option>
                            <option value="4/10">4/10</option>
                            <option value="5/10">5/10</option>
                            <option value="6/10">6/10</option>
                            <option value="7/10">7/10</option>
                            <option value="8/10">8/10</option>
                            <option value="9/10">9/10</option>
                            <option value="10/10">10/10</option>
                        </select> */}
                        { (review === null ) ? 
                        <>
                        <InputField textId="rating" displayText="Score /10" setText={setRating} />
                        <InputField textId="comments" displayText="Comments" setText={setComment} /> 
                        </>: 
                        <>
                        <InputField textId="rating" displayText="Score /10" setText={setRating} value={review.rating}/>
                        <InputField textId="comments" displayText="Comments" setText={setComment} value={review.comments}/>
                        </>
                        }


                    </div>
                    <div>
                        <button onClick={postReview} style={{ width: '80px', height: '35px', display: "inline", marginLeft: '100%', marginTop: '15%', background: '#42c8f5', fontWeight: 'bold' }}>Write Review</button>
                    </div>
                </div>

            </Modal>
        </div>

    );
}

export default ViewBookingAfterRenterModal;