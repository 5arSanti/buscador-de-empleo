import "./styles.css";

const TextInputCard = ({state, name}) => {
    const handleInputChange = (event) => {
        state(event.target.value);
    };
  
    const handleKeyPress = (event) => {
        if (event.code === "Enter") {
            state(event.target.value);
        }
    };

    return(
        <div className="input-container">
            <label htmlFor={`${name}-input`}>{name}:</label>
            <input 
                type="text" 
                name={`${name}-input`}
                placeholder={name}
                value={""}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export { TextInputCard} ;