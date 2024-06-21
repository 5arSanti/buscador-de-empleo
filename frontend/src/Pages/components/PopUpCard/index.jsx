import React from "react";
import { iconComplete, popUp } from "../../../assets";

import "./styles.css";

const PopUpCard = () => {
    const [modal, setModal] = React.useState(true);

    return(
        modal &&
            <div className="popup-container">
                <div className="popup-card">
                    <img src={popUp} alt="pop-up-image" />

                    <div className="popup-logo-and-button">
                        <div>
                            <img src={iconComplete} alt="spe-logo" />
                        </div>

                        <button title="Cerrar" onClick={() => { setModal(false) }}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
    );
}

export { PopUpCard };