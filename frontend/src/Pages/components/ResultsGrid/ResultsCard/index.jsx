import React from "react";

import { icon } from "../../../../assets";

import "./styles.css";
import PropTypes from "prop-types";
import { AppContext } from "../../../../Context";
import { prestadorImagenes } from "../../../../utils/images";

import { AnchorButton } from "./AnchorButton"
import { CardSubTitles } from "../../CardSubTitles";
import { formatDate } from "../../../../utils/formatDate";

const ResultsCard = ({data}) => {
    ResultsCard.propTypes = {
        data: PropTypes.object.isRequired,
    }

    const context = React.useContext(AppContext);

    const [hovered, setHovered] = React.useState(null);

    const fechaDesdeBaseDeDatos = data.FECHA_PUBLICACION;
    const fechaFormateada = formatDate(fechaDesdeBaseDeDatos, "/");
    console.log(fechaDesdeBaseDeDatos, fechaFormateada);

    // const nombrePrestador = data.NOMBRE_PRESTADOR;
    // const imagenRuta = prestadorImagenes[nombrePrestador] || icon;

    const handleClick = async (item) => {
        try {
            const codigoVacante = item?.CODIGO_VACANTE;

            const response = await fetch(`${context.apiUri}/estadisticas/vacantes/registrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({codigoVacante}),
            })

            if(!response.ok) {
                throw Error(response?.data?.message);
            }
        } catch (err) {
            console.log(err);
            context.handleNotifications("err", err);
        }
    }

    return(
        <div className="results-card-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(null)}
        >
            {context.windowWidth > 750 &&
                <AnchorButton
                    data={data}
                    // imagen={imagenRuta}
                    handleClick={() => handleClick(data)}
                    hovered={hovered}
                    type={1}
                />
            }

            <div className="results-card-main-info">
                <p><CardSubTitles>Oferta de Empleo</CardSubTitles>{data.CODIGO_VACANTE}</p>
                <p>{data.RANGO_SALARIAL}</p>
                <p>{data.DEPARTAMENTO}</p>
            </div>

            {context.windowWidth < 750 &&
                <AnchorButton
                    data={data}
                    // imagen={imagenRuta}
                    handleClick={() => handleClick(data)}
                    hovered={hovered}
                />
            }
            
            <div className="results-card-secondary-info">
                <p><CardSubTitles>Descripción</CardSubTitles>{data.TITULO_VACANTE}</p>
                <p className="results-card-secondary-description">{data.DESCRIPCION_VACANTE}</p>
            </div>
            <div className="results-card-complementary-info">
                <div>
                    <p className="mini-title">Prestador</p>
                    <p>{data.NOMBRE_PRESTADOR}</p>
                </div>
                <div>
                    <p className="mini-title">Fecha de Publicación</p>
                    <p>{fechaFormateada}</p>
                </div>
            </div>
        </div>
    );
}

export { ResultsCard };