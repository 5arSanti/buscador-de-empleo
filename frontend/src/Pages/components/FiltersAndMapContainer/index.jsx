import "./styles.css";

import { SearchInput } from "../SearchInput";
import { JobBoardGrid } from "../JobBoardGrid";
import { JobsCountContainer } from "../JobsCountContainer";
import { MunicipalityGrid } from "../MunicipalityGrid";
import { FiltersInputs } from "../FiltersInputs";
import { Map } from "../Map";
import { ResultsGrid } from "../ResultsGrid";
import { Title } from "../Title";
import { AppContext } from "../../../Context";
import React from "react";

const FiltersAndMapContainer = () => {
    const context = React.useContext(AppContext);
    
    return(
        <div className="filters-and-map-container">
            <div className="filters-container">
                <Title 
                    color={"#00698E"}
                    borderColor={"#00698E"}
                >
                    Buscador de Empleo
                </Title>
                <SearchInput/>
                
                <FiltersInputs/>

                <JobBoardGrid/>
                <JobsCountContainer/>
                <MunicipalityGrid/>
                
            </div>
            <div className="map-and-results-container">
                <Title 
                    color={"#00698E"}
                    borderColor={"#00698E"}
                >
                    Mapa Interactivo
                </Title>
                <Map/>
                <ResultsGrid/>
            </div>

        </div>
    );
}

export { FiltersAndMapContainer };