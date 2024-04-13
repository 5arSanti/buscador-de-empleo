import React from "react";
import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { MunicipalityCard } from "./MunicipalityCard";
import { LoadingCardSmall } from "../LoadingCard";
import { RecordNotFoundCard } from "../ResultsGrid/RecordNotFoundCard";

const MunicipalityGrid = () => {
    const context = React.useContext(AppContext);

    const sortedTotalDepartments = context.vacantesData?.total_departments?.sort((a, b) => b.total - a.total);
    const sortedTotalMunicipios = context.vacantesData?.total_municipios?.sort((a, b) => b.total - a.total);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={25}
            gap={15}
        >
            <SubTitle text="Departamentos"/>

            <ScrollableWrapper
                maxHeight={225}
            >
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>

                { !context.loading && context.vacantesData?.total_departments.length <= 0 ?
                    <RecordNotFoundCard
                        minHeight={175}
                        text="ningún departamento"
                    /> 
                    :
                    sortedTotalDepartments?.map((item, index) => (
                        <MunicipalityCard
                            key={index}
                            text={item.department}
                            value={item.total}
                            onClick={(value) => context.saveSelectedDepartment(value)}
                        />   
                    ))
                }

            </ScrollableWrapper>

            <SubTitle text="Municipios"/>
            <ScrollableWrapper
                maxHeight={225}
            >
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>


                { !context.loading && context.vacantesData?.total_municipios.length <= 0 ?
                    <RecordNotFoundCard
                        minHeight={175}
                        text="ningún municipio"
                    /> 
                    :
                    sortedTotalMunicipios?.map((item, index) => (
                        <MunicipalityCard
                            key={index}
                            text={item.municipio}
                            value={item.total}
                            onClick={(value) => context.handleFilterChange("MUNICIPIO", value)}
                        />   
                    ))
                }

            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { MunicipalityGrid };