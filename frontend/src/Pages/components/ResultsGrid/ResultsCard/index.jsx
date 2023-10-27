import "./styles.css";
import PropTypes from "prop-types";

const ResultsCard = ({data}) => {
    ResultsCard.propTypes = {
        data: PropTypes.node.isRequired,
    }

    return(
        <div className="results-card-container">
            <img src="/icon.png" alt="Colsubsidio" />
            <div className="results-card-main-info">
                <p>{data.EMPLEADOR}</p>
                <p>{data.RANGO_SALARIAL}</p>
                <p>{data.MUNICIPIO}</p>
            </div>
            <div className="results-card-secondary-info">
                <p>{data.TITULO_VACANTE}</p>
                <p className="results-card-secondary-description">{data.DESCRIPCION_VACANTE}</p>
            </div>
            <div className="results-card-complementary-info">
                <div>
                    <p className="mini-title">Codigo</p>
                    <p>{data.CODIGO_VACANTE}</p>
                </div>
                <div>
                    <p className="mini-title">Publicacion</p>
                    <p>{data.FECHA_PUBLICACION}</p>
                </div>
            </div>
        </div>
    );
}

export { ResultsCard };