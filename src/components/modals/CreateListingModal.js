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
function CreateListingModal({ closeFunction }) {

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
                <div style={{ display: 'flex' }}>
                    <InputField textId="title" displayText="Title" />
                    <button onClick={closeFunction} style={{ height: '25px', display: "inline", background: '#42c8f5', marginLeft: '15%', fontWeight: 'bold', alignFont: 'center', alignSelf: 'center' }}>X</button>
                </div>
                <InputField textId="address" displayText="Title" />
                <InputField textId="details" displayText="Details" />
                <InputField textId="amenities" displayText="Amenities" />
                <InputField textId="name" displayText="Name" />
                <InputField textId="description" displayText="Description" />
                <InputField textId="ratePerDay" displayText="Rate Per Day" />
                <button style={{ width: '80px', height: '35px', marginLeft: '30%', marginTop: '10%', background: '#42c8f5', fontWeight: 'bold' }}>Create</button>

            </Modal>
        </div>

    );
}

export default CreateListingModal;