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
function ViewBookingListerModal({ listingName, address, closeFunction, startDate, endDate, amount, review }) {

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
                <h4 style={{ display: "inline" }}>{listingName}</h4>
                <button onClick={closeFunction} style={{ display: "inline", background: '#42c8f5', marginLeft: '40%', fontWeight: 'bold' }}>X</button>
                <h4 style={{ color: '#42c8f5' }}>{address}</h4>

                <p>Start: {startDate}</p>
                <p>End: {endDate}</p>

                <p>Amount Paid: {amount}</p>

                {(review==null) ?
                <p>Review Not Yet Written</p> :
                <>
                <p>Review: {review.rating}/10</p>
                <p>Comments: {review.comments}</p>
                </>
                
                }

                




            </Modal>
        </div>

    );
}

export default ViewBookingListerModal;