import { formatNumbers } from "../../../../utils/formatNumbers";
import "./styles.css";

const MunicipalityCard = ({text, value, onClick, marginHorizontal=0}) => {
    return(
        <div className={`municipality-card-container`} 
            onClick={() => {
                onClick(text)
            }}
            style={{
                marginRight: marginHorizontal,
                marginLeft: marginHorizontal,
            }}
        >
            <p>{text}</p>
            <p>{formatNumbers(value)}</p>
        </div>
    );
}

export { MunicipalityCard };