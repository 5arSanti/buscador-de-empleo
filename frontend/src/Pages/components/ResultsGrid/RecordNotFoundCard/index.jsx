import "./styles.css";

import { notFound } from "../../../../assets";

const RecordNotFoundCard = ({minHeight= 400, text="ninguna vacante"}) => {
    return(
        <div className="record-not-found-card-container" style={{
            minHeight: minHeight,
        }}>
            <img src={notFound} alt="not-found-icon" />
            <p>No se encontró {text} con estos filtros.</p>
        </div>
    );
}

export { RecordNotFoundCard };