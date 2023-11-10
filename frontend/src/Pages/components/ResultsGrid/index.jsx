import React from "react";

import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { ResultsCard } from "./ResultsCard";

import { FiSkipBack, FiSkipForward } from "react-icons/fi";

import "./styles.css";

const ResultsGrid = () => {
    const context = React.useContext(AppContext);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [results, setResults] = React.useState([]);
  
    const fetchResults = async (page) => {
        try {
            const response = await fetch(`${context.apiUri}/vacantes/resultados?page=${page}`);
            const data = await response.json();
            console.log(data);

            setResults(data.resultados);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error(error);
            console.error('Error fetching results:', error.message);
        }
    };
  
    React.useEffect(() => {
        fetchResults(currentPage);
    }, [currentPage]);
  
    const handleSkipBack = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleSkipForward = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

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
                {/* {context.vacantesData?.resultados?.map((item, index) => (
                    <ResultsCard
                        key={index}
                        data={item}
                    />
                ))
                } */}
                {results?.map((item, index) => (
                    <ResultsCard
                        key={index}
                        data={item}
                    />
                ))
                }
            </ScrollableWrapper>
            <div className="pagination-buttons-container">
                <button
                    onClick={() => handleSkipBack()}
                >
                    <FiSkipBack/>
                </button>
                <button
                    onClick={() => handleSkipForward()}
                >
                    <FiSkipForward/>
                </button>
            </div>
        </FiltersWrapper>
    );
}

export { ResultsGrid };