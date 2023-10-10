import { FiltersWrapper } from "../FiltersWrapper";

import "./styles.css";

const FiltersInputs = () => {
    return(
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
    );
}

export { FiltersInputs };