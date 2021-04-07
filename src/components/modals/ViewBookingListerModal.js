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
function ViewBookingListerModal({ listingName, address, closeFunction }) {

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
                <h4 style={{ display: "inline" }}>{listingName}</h4>
                <button onClick={closeFunction} style={{ display: "inline", background: '#42c8f5', marginLeft: '40%', fontWeight: 'bold' }}>X</button>
                <h4 style={{ color: '#42c8f5' }}>{address}</h4>

                <p>Start: Month day year</p>
                <p>End: Month day year</p>

                <p>Amount Paid: $420</p>
                <p>Review: 10/10</p>
                <p>Comments: I would rent this again</p>




            </Modal>
        </div>

    );
}

export default ViewBookingListerModal;