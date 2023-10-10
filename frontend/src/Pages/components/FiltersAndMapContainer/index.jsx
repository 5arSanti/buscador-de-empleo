import "./styles.css";

import { SearchInput } from "../SearchInput";
import { JobBoardGrid } from "../JobBoardGrid";
import { JobsCountContainer } from "../JobsCountContainer";
import { MunicipalityGrid } from "../MunicipalityGrid";
import { FiltersInputs } from "../FiltersInputs";
import { Map } from "../Map";

const FiltersAndMapContainer = () => {
    
    return(
        <div className="filters-and-map-container">
            <div className="filters-container">
                <SearchInput/>
                
                <FiltersInputs/>

                <JobBoardGrid/>
                <JobsCountContainer/>
                <MunicipalityGrid/>
                
            </div>
            <div>
                <Map/>
            </div>

        </div>
    );
}

export { FiltersAndMapContainer };