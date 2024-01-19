import React from "react";
import { AppContext } from "../../../Context";
import { SubTitle } from "../SubTitle";

const SubscriptionContainer = () => {
    const context = React.useContext(AppContext);

    const handleInputChange = (event) => {
        // context.setSearchValue(event.target.value);
    };
  
    const handleKeyPress = (event) => {
        if (event.code === "Enter") {
            // onSearch(context.searchValue);
        }
    };

    return(
        <div className="input-job-container">
            <SubTitle
                text={"Sucribirse a la BUE."}
            />
            <label htmlFor="subscribe-input">Nombre</label>
            <input 
                type="text" 
                name="subscribe-input" 
                placeholder="Nombre"
                value={""}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />

            <label htmlFor="subscribe-input">Correo:</label>
            <input 
                type="text" 
                name="subscribe-input" 
                placeholder="Correo"
                value={""}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export { SubscriptionContainer };