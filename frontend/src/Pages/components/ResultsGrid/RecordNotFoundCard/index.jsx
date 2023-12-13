import "./styles.css";

import { notFound } from "../../../../assets";

const RecordNotFoundCard = () => {
    return(
        <div className="record-not-found-card-container">
            <img src={notFound} alt="not-found-icon" />
            <p>No se encontro ninguna vacante con estos filtros.</p>
        </div>
    );
}

export { RecordNotFoundCard };