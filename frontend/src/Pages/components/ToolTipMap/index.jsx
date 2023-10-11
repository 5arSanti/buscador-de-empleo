import { SubTitle } from "../SubTitle";
import "./styles.css";

const ToolTipMap = ({ content }) => {
    return (
        <div className="tool-tip-container">
            <SubTitle
                text={"Pase el cursor por encima del departamento para ver mas opciones"}
                fontSize={11}
                color="#7B7B7B"
            />
            <div className="tool-tip-info-container">
                <p>Departamento:</p>
                <p>{content}</p>
            </div>

            <div className="tool-tip-info-container">
                <p>Ofertas: </p>
                <p>250894</p>
            </div>

        </div>
    );
}

export { ToolTipMap };