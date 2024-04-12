import { formatNumbers } from "../../../../utils/formatNumbers";
import "./styles.css";

const MunicipalityCard = ({text, value, onClick}) => {
    return(
        <div className={`municipality-card-container`} 
            onClick={() => {
                onClick(text)
            }}
        >
            <p>{text}</p>
            <p>{formatNumbers(value)}</p>
        </div>
    );
}

export { MunicipalityCard };