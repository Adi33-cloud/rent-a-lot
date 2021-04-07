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
function ViewBookingAfterRenterModal({ listingName, address, description, closeFunction }) {

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

                <p>Month day year-Month day year</p>

                <div style={{ marginTop: '5%', display: 'flex', alignContent: 'center', justifyContent: 'flex-start' }}>
                    <div>
                        <label for="score">Score:</label>
                        <select name="users" id="users">
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
                        </select>
                        <InputField textId="comments" displayText="Comments" />

                    </div>
                    <div>
                        <button style={{ width: '80px', height: '35px', display: "inline", marginLeft: '100%', marginTop: '15%', background: '#42c8f5', fontWeight: 'bold' }}>Write Review</button>
                    </div>
                </div>

            </Modal>
        </div>

    );
}

export default ViewBookingAfterRenterModal;