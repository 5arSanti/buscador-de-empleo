import React from "react";
import { FiExternalLink } from "react-icons/fi";

import "./styles.css";
import PropTypes from "prop-types";
import { AppContext } from "../../../../Context";

const ResultsCard = ({data}) => {
    ResultsCard.propTypes = {
        data: PropTypes.object.isRequired,
    }

    const context = React.useContext(AppContext);

    const [hovered, setHovered] = React.useState(null);

    const fechaDesdeBaseDeDatos = data.FECHA_CREACION;
    const fechaFormateada = new Date(fechaDesdeBaseDeDatos).toLocaleDateString({
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return(
        <div className="results-card-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(null)}
        >
            {context.windowWidth > 650 &&
                <a href={data.URL_DETALLE_VACANTE} rel="noopener noreferrer" target="_blank" >
                    {hovered &&
                        <div>
                            <FiExternalLink/>
                        </div>
                    }
                    <img src="/icon.png" alt="" />
    
                </a>
            }

            <div className="results-card-main-info">
                <p>{data.EMPLEADOR}</p>
                <p>{data.RANGO_SALARIAL}</p>
                <p>{data.DEPARTAMENTO}</p>
            </div>
            {context.windowWidth < 550 &&
                <a href={data.URL_DETALLE_VACANTE} rel="noopener noreferrer" target="_blank" >
                    <div>
                        <FiExternalLink/>
                    </div>
                    <img src="/icon.png" alt="Colsubsidio" />
                </a>
            }
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
                    <p>{fechaFormateada}</p>
                </div>
            </div>
        </div>
    );
}

export { ResultsCard };