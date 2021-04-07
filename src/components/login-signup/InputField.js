function InputField({ textId, displayText, setText }) {

    function handleChange(event)
    {
        setText(event.target.value);
    }

    return (
        <div>
            <label for={textId}>{displayText}:</label>
            <input type="text" id={textId} name={textId} onChange={handleChange} /><br></br><br></br>
        </div>
    );
}

export default InputField;