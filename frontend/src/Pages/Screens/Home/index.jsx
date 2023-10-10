import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";

const Home = () => {
    return (
        <div className="home-container">
            <Title
                color={"#000"}
                borderColor={"#000"}
            >
                Bolsa Única de Empleo del SPE.
            </Title>
            <AllInfoContainer/>
        </div>
    );
}

export {Home};