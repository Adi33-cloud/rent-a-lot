function InputField({ textId, displayText, setText, value }) {

    function handleChange(event)
    {
        setText(event.target.value);
    }

    const inputLabel = () => {

        if (value!== undefined)
        {
            return <input type="text" id={textId} name={textId} value={value} onChange={handleChange} />;
        }
        else
        {
            return <input type="text" id={textId} name={textId} onChange={handleChange} />;
        }

    }

    return (
        <div>
            <label for={textId}>{displayText}:</label>
            { inputLabel()}
            <br></br><br></br>
            
        </div>
    );
}

export default InputField;