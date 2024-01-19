import "./styles.css"
import { Title } from "../../components/Title";

const Analytics = () => {
    return (
        <div className="analytics-container">
            <Title
                color={"#00698E"}
                borderColor={"#00698E"}
            >
                Analítica de la Bolsa Única de Empleo.
            </Title>
            {/* <AllInfoContainer/> */}
        </div>
    );
}

export { Analytics };