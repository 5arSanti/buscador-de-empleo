import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";
import { FiltersWrapper } from "../../components/FiltersWrapper";
import { SubTitle } from "../../components/SubTitle";

import { SubsFormContainer } from "../../components/SubsFormContainer";

const SubscriptionScreen = () => {
    return (
        <div className="analytics-container">
            <Title
                color={"#00698E"}
                borderColor={"#00698E"}
            >
                La funcionalidad de esta pestaña esta en desarrollo...
            </Title>
            <Title
                color={"#00698E"}
                borderColor={"#00698E"}
            >
                Suscribirse a la Bolsa Única de Empleo del SPE.
            </Title>

            <AllInfoContainer>
                <div className="filters-and-map-container">
                    <div>
                        <Title>
                            Información
                        </Title>
                        <FiltersWrapper>
                            <SubTitle
                                text={"Texto Placeholder"}
                            />
                        </FiltersWrapper>
                    </div>

                    <div>
                        <Title>
                            Suscribirse o darse de baja de la BUE
                        </Title>

                        <SubsFormContainer/>
                        
                    </div>


                </div>

            </AllInfoContainer>

        </div>
    );
}

export { SubscriptionScreen };