import React from "react";

import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { ResultsCard } from "./ResultsCard";

import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { MdImportExport } from "react-icons/md";

import "./styles.css";
import { LoadingCardBig } from "../LoadingCard";
import { RecordNotFoundCard } from "./RecordNotFoundCard";

import { usePDF } from 'react-to-pdf';

const ResultsGrid = () => {
    const context = React.useContext(AppContext);

    // const { toPDF, targetRef } = usePDF({filename: 'Resultados.pdf'});

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
                    <div className="pagination-buttons-container">
                        <button
                            title="Exportar resultados, vista acutal"
                            onClick={() => context.setOpenExportModal(!context.openExportModal)}
                        >
                            <MdImportExport/>
                        </button>


                        <p>Pagina 
                            <input 
                                type="text" 
                                pattern="[0-9]"
                                placeholder={context.vacantesData?.currentPage}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        const pageNumber = parseInt(event.target.value);
                                        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= context.vacantesData?.totalPages) {
                                            context.setCurrentPage(pageNumber);
                                            event.target.value = "";
                                        } else {
                                            event.target.value = "";
                                        }
                                    }
                                }}
                            />
                            de {context.vacantesData?.totalPages}
                        </p>

                        <button
                            title="Volver a la Primera Página"
                            onClick={() => context.handlePagination()}
                        >
                            <AiOutlineHome/>
                        </button>
                        <button
                            title="Página Anterior"
                            onClick={() => context.handlePagination(1)}
                        >
                            <FiSkipBack/>
                        </button>
                        <button
                            title="Página Siguiente"
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