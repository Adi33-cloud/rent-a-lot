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
function ViewListingsDetailsModal({ listingName, address, rate, description, closeFunction }) {

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

                <div style={{ marginTop: '5%' }}>
                    <h2 style={{ display: "inline" }}>${rate}/Day</h2>
                    <button style={{ width: '60px', height: '30px', display: "inline", marginLeft: '55%', background: '#42c8f5', fontWeight: 'bold' }}>Rent</button>

                </div>


            </Modal>
        </div>

    );
}

export default ViewListingsDetailsModal;