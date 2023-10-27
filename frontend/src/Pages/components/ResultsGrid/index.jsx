import React from "react";

import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { ResultsCard } from "./ResultsCard";

import "./styles.css";

const ResultsGrid = () => {
    const context = React.useContext(AppContext);

    return (
        <FiltersWrapper
            flexDirection={"column"}
            padding={20}
        >
            <SubTitle
                text={"Resultados"}
            />
            <div className="info-container">
                <p>Seleccione la oferta de su interés dando clic en cualquier parte de la vacante, esto lo llevará directamente a la página donde se encuentra publicada.</p>
                <p>Los logos corresponden a los prestadores autorizados que tienen dicha vacante registrada. Seleccione el de su preferencia.</p>
            </div>

            <ScrollableWrapper
                maxHeight={450}
                gap={10}
            >
                {context.vacantesData?.map((item, index) => (
                    <ResultsCard
                        key={index}
                        data={item}
                    />
                ))

                }
            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { ResultsGrid };