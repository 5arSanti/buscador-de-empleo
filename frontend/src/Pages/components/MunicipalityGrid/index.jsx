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
                maxHeight={295}
            >
                {context.vacantesData?.total_departments?.length === 1 &&
                    <MunicipalityCard
                        text={"Todos los Departamentos"}
                        value={null}
                        onClick={() => {
                            context.clearSelectedDepartment();
                        }}
                    />
                }
                {sortedTotalDepartments?.map((item, index) => (
                    <MunicipalityCard
                        key={index}
                        text={item.department}
                        value={item.total}
                        onClick={(value) => context.saveSelectedDepartment(value)}
                    />   
                ))}

            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { MunicipalityGrid };