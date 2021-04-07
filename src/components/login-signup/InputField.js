function InputField({ textId, displayText }) {

    return (
        <div>
            <label for={textId}>{displayText}:</label>
            <input type="text" id={textId} name={textId} /><br></br><br></br>
        </div>
    );
}

export default InputField;