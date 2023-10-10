import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";

import "./styles.css";

const ResultsGrid = () => {
    return (
        <FiltersWrapper
            flexDirection={"column"}
            padding={25}
        >
            <SubTitle
                text={"Resultados"}
            />
            <div className="info-container">
                <p>Seleccione la oferta de su interés dando clic en cualquier parte de la vacante, esto lo llevará directamente a la página donde se encuentra publicada.</p>
                <p>Los logos corresponden a los prestadores autorizados que tienen dicha vacante registrada. Seleccione el de su preferencia.</p>
            </div>

            <ScrollableWrapper
                maxHeight={400}
            >
                <ResultsGrid/>
            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { ResultsGrid };