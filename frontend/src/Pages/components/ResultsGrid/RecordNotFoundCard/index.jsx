import "./styles.css";

const RecordNotFoundCard = () => {
    return(
        <div className="record-not-found-card-container">
            <img src="/not-found.png" alt="not-found-icon" />
            <p>No se encontro ninguna vacante con estos filtros.</p>
        </div>
    );
}

export { RecordNotFoundCard };