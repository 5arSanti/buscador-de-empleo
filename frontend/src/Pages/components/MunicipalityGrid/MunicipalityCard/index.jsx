import React from "react";
import "./styles.css";

const MunicipalityCard = ({text, value, onClick}) => {
    const [isCLicked, setIsClicked] = React.useState(null);

    return(
        <div className={`municipality-card-container ${isCLicked ? "municipality-card-container-clicked" : ""}`} 
            onClick={() => {
                onClick(text)
                setIsClicked(false);
                setIsClicked(true);
            }}
        >
            <p>{text}</p>
            <p>{value}</p>
        </div>
    );
}

export { MunicipalityCard };