import { FiltersWrapper } from "../FiltersWrapper";


import "./styles.css";

import { SearchInput } from "../SearchInput";
import { JobBoardGrid } from "./JobBoardGrid";
import { JobsCountContainer } from "../JobsCountContainer";
import { MunicipalityGrid } from "../MunicipalityGrid";

const FiltersAndMapContainer = () => {
    
    return(
        <div className="filters-and-map-container">
            <div className="filters-container">
                <SearchInput/>
                <FiltersWrapper
                    flexDirection={"column"}
                    padding={20}
                    gap={5}
                >

                    <label htmlFor="salary-range">Rango Salarial</label>
                    <select name="salary-range" id="salary-range">

                    </select>

                    <label htmlFor="provider">Prestador</label>
                    <select name="provider" id="provider">

                    </select>

                    <label htmlFor="telecommuting">Teletrabajo</label>
                    <select name="telecommuting" id="telecommuting">

                    </select>

                    <label htmlFor="type-of-contract">Tipo Contrato</label>
                    <select name="type-of-contract" id="type-of-contract">

                    </select>

                    <label htmlFor="educational-level">Nivel de Estudios</label>
                    <select name="educational-level" id="educational-level">

                    </select>

                </FiltersWrapper>

                <JobBoardGrid/>
                <JobsCountContainer/>
                <MunicipalityGrid/>
                
            </div>
            <div>

            </div>

        </div>
    );
}

export { FiltersAndMapContainer };