import React from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import "./styles.css";
import PropTypes from "prop-types";
import { AppContext } from "../../../../Context";

import { AnchorButton } from "./AnchorButton"
import { CardSubTitles } from "../../CardSubTitles";

dayjs.extend(utc)

const ResultsCard = ({data}) => {
    const context = React.useContext(AppContext);

    ResultsCard.propTypes = {
        data: PropTypes.object.isRequired,
    }


    const [hovered, setHovered] = React.useState(null);

    const fechaFormateada = dayjs(data?.FECHA_PUBLICACION).utc().format("DD/MM/YYYY");


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