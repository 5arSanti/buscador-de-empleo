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
                defaultValue={context.filters?.RANGO_SALARIAL}
                onChange={(value) => context.handleFilterChange("RANGO_SALARIAL", value)}
            />

            <FiltersOptionCard
                id={"provider"}
                title={"Prestador"}
                array={context.vacantesData?.filters?.prestador}
                defaultValue={context.filters?.NOMBRE_PRESTADOR}
                onChange={(value) => context.handleFilterChange("NOMBRE_PRESTADOR", value)}
            />

            <label htmlFor="telecommuting">Teletrabajo</label>
            <select 
                name="telecommuting" 
                id="telecommuting"
                onChange={(event) => context.handleFilterChange("TELETRABAJO", event.target.value)}
                value={context.filters?.TELETRABAJO || ""}
            >
                <option value="">Todo</option>
                <option value={"1"}>Si</option>
                <option value={"0"}>No</option>
            </select>

            <FiltersOptionCard
                id={"type-of-contract"}
                title={"Tipo Contrato"}
                defaultValue={context.filters?.TIPO_CONTRATO}
                array={context.vacantesData?.filters?.tipoContrato}
                onChange={(value) => context.handleFilterChange("TIPO_CONTRATO", value)}
            />

            <FiltersOptionCard
                id={"educational-level"}
                title={"Nivel de Estudios"}
                defaultValue={context.filters?.NIVEL_ESTUDIOS}
                array={context.vacantesData?.filters?.nivelDeEstudios}
                onChange={(value) => context.handleFilterChange("NIVEL_ESTUDIOS", value)}
            />

            {/* <FiltersOptionCard
                id={"foreigner"}
                title={"Vacantes en el Extranjero"}
                array={["SI"]}
                onChange={(value) => context.saveSelectedDepartment(value == "SI" ? "VACANTES PARA TODO EL TERRITORIO" : "")}
            /> */}
            <FiltersOptionCard
                id={"publication-date"}
                title={"Fecha de Publicación"}
                defaultValue={context.selectedDate}
                array={["Hoy", "Última semana", "Último mes"]}
                onChange={(value) => context.handleDateFilterChange(value)}
            />
        </FiltersWrapper>
    );
}

export { FiltersInputs };