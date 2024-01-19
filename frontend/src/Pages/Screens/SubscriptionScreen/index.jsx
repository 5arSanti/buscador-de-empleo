import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";
import { FiltersWrapper } from "../../components/FiltersWrapper";
import { SubTitle } from "../../components/SubTitle";
import { ScrollableWrapper } from "../../components/ScrollableWrapper";
import { SubscriptionContainer } from "../../components/SubscriptionContainer";
import { TextInputCard } from "../../components/TextInputCard";
import { ButtonCard } from "../../components/ButtonCard";

const SubscriptionScreen = () => {
    return (
        <div className="analytics-container">
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

                        <div className="filters-container">
                            <FiltersWrapper
                                flexDirection="column"
                                padding={25}
                            >
                                <SubTitle
                                    text={"Suscribirse a la BUE"}
                                />
                                <TextInputCard name={"Nombre"}/>
                                <TextInputCard name={"Correo"}/>
                                <ButtonCard text="Suscribirse"/>
                            </FiltersWrapper>

                            <FiltersWrapper
                                flexDirection="column"
                                padding={25}
                            >
                                <SubTitle 
                                    text={"Darse de baja de la BUE"}
                                />
                                <TextInputCard name={"Correo"}/>
                                <ButtonCard text="Darse de Baja"/>

                            </FiltersWrapper>
                        </div>
                        
                    </div>


                </div>

            </AllInfoContainer>

        </div>
    );
}

export { SubscriptionScreen };