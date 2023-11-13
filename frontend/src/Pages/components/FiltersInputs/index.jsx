import React from "react";
import { FiltersWrapper } from "../FiltersWrapper";
import { AppContext } from "../../../Context";

import { FiltersOptionCard } from "../FiltersOptionCard";

import "./styles.css";

const FiltersInputs = () => {
    const context = React.useContext(AppContext);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={20}
            gap={5}
        >
            <FiltersOptionCard
                id={"salary-range"}
                title={"Rango Salarial"}
                array={context.vacantesData?.filters?.rangoSalarial}
            />

            <FiltersOptionCard
                id={"provider"}
                title={"Prestador"}
                array={context.vacantesData?.filters?.prestador}
            />

            <label htmlFor="telecommuting">Teletrabajo</label>
            <select name="telecommuting" id="telecommuting">
                <option value="">Todo</option>
                <option value="">Si</option>
                <option value="">No</option>
            </select>

            <FiltersOptionCard
                id={"type-of-contract"}
                title={"Tipo Contrato"}
                array={context.vacantesData?.filters?.tipoContrato}
            />

            <FiltersOptionCard
                id={"educational-level"}
                title={"Nivel de Estudios"}
                array={context.vacantesData?.filters?.nivelDeEstudios}
            />
        </FiltersWrapper>
    );
}

export { FiltersInputs };