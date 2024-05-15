import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";
import { FiltersAndMapContainer } from "../../components/FiltersAndMapContainer";

const Home = () => {
    return (
        <div className="home-container">
            <AllInfoContainer>
                <FiltersAndMapContainer/>
            </AllInfoContainer>
        </div>
    );
}

export {Home};