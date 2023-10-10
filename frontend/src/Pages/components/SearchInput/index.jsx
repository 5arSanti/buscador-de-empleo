import { FiltersWrapper } from "../FiltersWrapper";
import { Title } from "../Title";

import "./styles.css";

const SearchInput = () => {
    return(
        <>
            <Title 
                color={"#00698E"}
                borderColor={"#00698E"}
            >
                Buscador de Empleo
            </Title>

            <FiltersWrapper 
                flexDirection={"column"}
                padding={25}
            >
                <div className="input-job-container">
                    <label htmlFor="search-job-input">Buscar empleo:</label>
                    <input type="text" name="search-job-input" placeholder="Mecanico"/>
                </div>
                <div className="info-container">
                    <p>Busque por una palabra o palabras claves, ejemplo: &apos;Mecanico&apos;, y presione Enter. Tambi&eacute;n puede realizar su b&uacute;squeda por el C&oacute;digo de la Vacante.</p>
                    <p>Se recomienda no escribir con tildes. </p>
                </div>

            </FiltersWrapper>
        </>
    );
}

export { SearchInput };