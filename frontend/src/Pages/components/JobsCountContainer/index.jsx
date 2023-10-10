import { FiltersWrapper } from "../FiltersWrapper";
import { SubTitle } from "../SubTitle";

import "./styles.css";

const JobsCountContainer = () => {
    let count = Math.floor(Math.random() * 300000) + 1;

    return(
        <FiltersWrapper
            flexDirection="column"
            padding={25}
            gap={10}
        >
            <SubTitle fontSize={16} text={"Número total de ofertas de empleo hoy de acuerdo a su búsqueda."}/>

            <div className="count-container">
                <p>{count}</p>
            </div>
        </FiltersWrapper>
    );
}

export { JobsCountContainer };