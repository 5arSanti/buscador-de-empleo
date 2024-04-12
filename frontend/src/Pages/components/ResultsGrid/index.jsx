import React from "react";

import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { ResultsCard } from "./ResultsCard";

import { FiSkipBack, FiSkipForward, FiDownload  } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

import "./styles.css";
import { LoadingCardBig } from "../LoadingCard";
import { RecordNotFoundCard } from "./RecordNotFoundCard";

import { NavigationButton } from "../NavigationButton";
import { PaginationInput } from "../PaginationInput";

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
                <p>Seleccione la oferta de su interés haciendo clic en Ir a la Oferta, esto lo llevará directamente a la página donde se encuentra publicada.</p>
                {/* <p>Los logos corresponden a los prestadores autorizados que tienen dicha vacante registrada. Seleccione el de su preferencia.</p> */}
            </div>

            {context.windowWidth > 750 && 
                <div className="titles-cards-container">
                    <p>Ir a la Oferta</p>
                    <p>Prestador</p>
                    <p>Descripción</p>
                    <p>Detalles</p>
                </div>
            }


            {(!context.loading && (!context.vacantesData || context.vacantesData?.resultados?.length === 0)) ?
                <RecordNotFoundCard/>
                :
                <>
                    <ScrollableWrapper
                        maxHeight={450}
                        gap={0}
                    >
                        <div className="export-container" ref={context.targetRef}>
                            <LoadingCardBig/>
                            <LoadingCardBig/>
                            <LoadingCardBig/>
                            <LoadingCardBig/>
                            <LoadingCardBig/>
                        
                            {!context.loading && context.vacantesData?.resultados?.map((item, index) => (
                                <ResultsCard
                                    key={index}
                                    data={item}
                                />
                            ))}
                        </div>
                        
                        
                    </ScrollableWrapper>
                    
                    {!context.loading &&
                        <div className="pagination-buttons-container">
                            <NavigationButton 
                                title={"Exportar resultados, vista acutal"}
                                onClick={() => context.setOpenExportModal(!context.openExportModal)}
                                className={context.windowWidth <= 400 && "span-3"}
                            >
                                <FiDownload />
                            </NavigationButton>

                            <PaginationInput
                                className={context.windowWidth <= 400 && "span-3"}
                            />

                            <NavigationButton 
                                title={"Volver a la Primera Página"}
                                onClick={() => context.handlePagination()}
                            >
                                <AiOutlineHome/>
                            </NavigationButton>

                            <NavigationButton 
                                title={"Página Anterior"}
                                onClick={() => context.handlePagination(1)}
                            >
                                <FiSkipBack/>
                            </NavigationButton>

                            <NavigationButton 
                                title={"Página Siguiente"}
                                onClick={() => context.handlePagination(2)}
                            >
                                <FiSkipForward/>
                            </NavigationButton>
                        </div>
                    }
                </>
            }
        </FiltersWrapper>
    );
}

export { ResultsGrid };