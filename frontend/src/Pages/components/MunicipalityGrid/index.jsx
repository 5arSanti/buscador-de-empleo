import React from "react";
import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { MunicipalityCard } from "./MunicipalityCard";

const MunicipalityGrid = () => {
    const context = React.useContext(AppContext);

    const sortedTotalDepartments = context.vacantesData?.total_departments?.sort((a, b) => b.total - a.total);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={25}
            gap={15}
        >
            <SubTitle text="Municipios"/>

            <ScrollableWrapper
                maxHeight={350}
            >
                <MunicipalityCard
                    text={"Todo"}
                    value={context.vacantesData?.total}
                    onClick={() => {
                        context.handleFilterChange("DEPARTAMENTO", "")
                    }}
                />
                {sortedTotalDepartments?.map((item, index) => (
                    <MunicipalityCard
                        key={index}
                        text={item.department}
                        value={item.total}
                        onClick={(value) => {
                            context.handleFilterChange("DEPARTAMENTO", value)
                        }}
                    />   
                ))}

            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { MunicipalityGrid };