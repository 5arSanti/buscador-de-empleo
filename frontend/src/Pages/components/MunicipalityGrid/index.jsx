import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { MunicipalityCard } from "./MunicipalityCard";

const MunicipalityGrid = () => {
    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={25}
            gap={15}
        >
            <SubTitle text="Municipios"/>

            <ScrollableWrapper
                maxHeight={250}
            >
                {/* TEST */}
                <MunicipalityCard
                    text={"Bogotá"}
                    value={147561}
                />
                <MunicipalityCard
                    text={"Medellin"}
                    value={1234}
                />
                <MunicipalityCard
                    text={"Cali"}
                    value={6234653}
                />
                <MunicipalityCard
                    text={"Bucaramanga"}
                    value={745643}
                />
                <MunicipalityCard
                    text={"Barranquilla"}
                    value={15231}
                />
                <MunicipalityCard
                    text={"Pereira"}
                    value={2352}
                />
                <MunicipalityCard
                    text={"Bucaramanga"}
                    value={745643}
                />
                <MunicipalityCard
                    text={"Barranquilla"}
                    value={15231}
                />
                <MunicipalityCard
                    text={"Pereira"}
                    value={2352}
                />                
            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { MunicipalityGrid };