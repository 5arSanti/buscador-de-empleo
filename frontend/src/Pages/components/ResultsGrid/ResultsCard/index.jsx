import React from "react";

import { icon } from "../../../../assets";

import "./styles.css";
import PropTypes from "prop-types";
import { AppContext } from "../../../../Context";
import { prestadorImagenes } from "../../../../utils/images";

import { AnchorButton } from "./AnchorButton"

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

    const nombrePrestador = data.NOMBRE_PRESTADOR;
    const imagenRuta = prestadorImagenes[nombrePrestador] || icon;

    const handleClick = async (item) => {
        try {
            const codigoVacante = item.CODIGO_VACANTE;

            const response = await fetch(`${context.apiUri}/estadisticas/vacantes/registrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({codigoVacante}),
            })

            if(!response.ok) {
                throw new Error;
            }
        } catch (err) {
            context.handleNotifications("err", err.message);
        }
    }

    return(
        <div className="results-card-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(null)}
        >
            {context.windowWidth > 650 &&
                <AnchorButton
                    data={data}
                    imagen={imagenRuta}
                    handleClick={() => handleClick(data)}
                    hovered={hovered}
                    type={1}
                />
            }

            <div className="results-card-main-info">
                <p>{data.NOMBRE_PRESTADOR}</p>
                <p>{data.RANGO_SALARIAL}</p>
                <p>{data.DEPARTAMENTO}</p>
            </div>

            {context.windowWidth < 650 &&
                <AnchorButton
                    data={data}
                    imagen={imagenRuta}
                    handleClick={() => handleClick(data)}
                    hovered={hovered}
                />
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