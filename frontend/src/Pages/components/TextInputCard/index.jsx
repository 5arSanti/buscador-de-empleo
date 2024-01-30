import React from "react";
import "./styles.css";

const TextInputCard = ({state, name, type="text", onInputChange}) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onInputChange(event.target.value, name);
    };
  
    const handleKeyPress = (event) => {
        if (event.code === "Enter") {
            onInputChange(inputValue, name);
        }
    };

    return(
        <div className="input-container">
            <label htmlFor={`${name}-input`}>{name}:</label>
            <input 
                type={type} 
                name={`${name}-input`}
                placeholder={name}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export { TextInputCard } ;