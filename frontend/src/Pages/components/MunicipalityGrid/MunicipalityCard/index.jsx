
import "./styles.css";

const MunicipalityCard = ({text, value}) => {
    return(
        <div className="municipality-card-container">
            <p>{text}</p>
            <p>{value}</p>
        </div>
    );
}

export { MunicipalityCard };