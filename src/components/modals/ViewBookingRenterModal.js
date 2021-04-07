import React, { useState } from 'react';
import Modal from 'react-modal';

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
function ViewBookingRenterModal({ listingName, address, description, closeFunction }) {

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
                <div style={{ width: '400px', height: '200px', overflow: 'scroll', background: '#fff' }}>
                    <div style={{ display: 'flex', borderBottom: 'solid', marginRight: '5%' }}>
                        <h2 style={{ display: 'inline', marginRight: '5%' }}>Bathroom</h2>
                        <p style={{ display: 'inline' }}>hard coded description lets see how this is ngl I don't know what I'm doing in life. I just want to pass all my classes and eat popcorn while watching netflix</p>
                    </div>

                    <div style={{ display: 'flex', borderBottom: 'solid', marginRight: '5%' }}>
                        <h2 style={{ display: 'inline', marginRight: '5%' }}>Bathroom</h2>
                        <p style={{ display: 'inline' }}>hard coded description lets see how this is ngl I don't know what I'm doing in life. I just want to pass all my classes and eat popcorn while watching netflix</p>
                    </div>

                    <div style={{ display: 'flex', borderBottom: 'solid', marginRight: '5%' }}>
                        <h2 style={{ display: 'inline', marginRight: '5%' }}>Bathroom</h2>
                        <p style={{ display: 'inline' }}>hard coded description lets see how this is ngl I don't know what I'm doing in life. I just want to pass all my classes and eat popcorn while watching netflix</p>
                    </div>
                </div>

                <div style={{ marginTop: '5%', display: 'flex', alignContent: 'center', justifyContent: 'flex-start' }}>
                    <div>
                        <p>Start: Month day year</p>
                        <p style={{ marginTop: '-10%' }}>End: Month day year</p>
                    </div>
                    <div>
                        <button style={{ width: '80px', height: '35px', display: "inline", marginLeft: '205%', marginTop: '15%', background: '#42c8f5', fontWeight: 'bold' }}>Cancel Rental</button>
                    </div>
                </div>


            </Modal>
        </div>

    );
}

export default ViewBookingRenterModal;