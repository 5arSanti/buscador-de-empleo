import React from "react";

import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { ResultsCard } from "./ResultsCard";

import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

import "./styles.css";
import { LoadingCardBig } from "../LoadingCard";
import { RecordNotFoundCard } from "./RecordNotFoundCard";

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
                <p>Seleccione la oferta de su interés dando clic en el logo de la vacante, esto lo llevará directamente a la página donde se encuentra publicada.</p>
                <p>Los logos corresponden a los prestadores autorizados que tienen dicha vacante registrada. Seleccione el de su preferencia.</p>
            </div>

            {!context.loading && context.vacantesData?.resultados?.length === 0 ?
                <RecordNotFoundCard/>
                :
                <>
                    <ScrollableWrapper
                        maxHeight={450}
                        gap={10}
                    >
                        <LoadingCardBig/>
                        <LoadingCardBig/>
                        <LoadingCardBig/>
                        <LoadingCardBig/>

                        {!context.loading && context.vacantesData?.resultados?.map((item, index) => (
                            <ResultsCard
                                key={index}
                                data={item}
                            />
                        ))
                        }
                    </ScrollableWrapper>
                    <div className="pagination-buttons-container">
                        <p>Pagina 
                            <input 
                                type="text" 
                                pattern="[0-9]"
                                placeholder={context.vacantesData.currentPage}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        const pageNumber = parseInt(event.target.value);
                                        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= context.vacantesData.totalPages) {
                                            context.setCurrentPage(pageNumber);
                                            event.target.value = "";
                                        } else {
                                            event.target.value = "";
                                        }
                                    }
                                }}
                            />
                            de {context.vacantesData.totalPages}
                        </p>
                        <button
                            onClick={() => context.handlePagination()}
                        >
                            <AiOutlineHome/>
                        </button>
                        <button
                            onClick={() => context.handlePagination(1)}
                        >
                            <FiSkipBack/>
                        </button>
                        <button
                            onClick={() => context.handlePagination(2)}
                        >
                            <FiSkipForward/>
                        </button>
                    </div>              
                </>
            }
        </FiltersWrapper>
    );
}

export { ResultsGrid };