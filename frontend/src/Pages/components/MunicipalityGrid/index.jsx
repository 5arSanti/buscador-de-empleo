import { FiltersWrapper } from "../FiltersWrapper";
import { SubTitle } from "../SubTitle";


import "./styles.css";

const MunicipalityGrid = () => {
    return(
        <FiltersWrapper
            flexDirection="columm"
            padding={25}
            gap={15}
        >
            <SubTitle text="Municipios"/>
        </FiltersWrapper>
    );
}

export { MunicipalityGrid };