import { NavIcons } from "../NavIcons";
import { SubTitle } from "../SubTitle";
import { PlacesOfInterestIcons } from "../PlacesOfInterestIcons";
import { IconLayout } from "../PlacesOfInterestIcons/IconLayout";

import "./styles.css";

import { BsFillBuildingFill } from "react-icons/bs";
import React from "react";
import { AppContext } from "../../../Context";

const Footer = () => {
    const context = React.useContext(AppContext)

    return(
        <footer className="footer-container">
            <div className="footer-interest-and-about-container">
                <div className="footer-interest-container">
                    <SubTitle
                        text={"Sitios de Interes"}
                    />
                    <PlacesOfInterestIcons
                        flexDirection={"row"}
                        gap={25}
                    />
                </div>

                <div className="footer-about-container">
                    <IconLayout
                        title={"Informacion de la Entidad"}
                        href={"https://www.serviciodeempleo.gov.co/la-unidad"}
                        icon={<BsFillBuildingFill/>}
                    >
                        <p>Informacion de la Entidad</p>
                    </IconLayout>
                </div>  
            </div>


            <div className="second-footer-container">
                <div className="daily-and-date-container">
                    <div>
                        <p>Visitas Diarias: 1</p>
                        <p>Visitas Totales: 10</p>
                    </div>
                    <p>{context.actualDate()}</p>
                </div>

                <div className="footer-copy-container">
                    <div className="footer-icons">
                        <NavIcons
                            flexDirection={"row"}
                        />
                    </div>
                    <p>&copy; 2023 Servicio Publico de Empleo</p>
                </div>
            </div>

        </footer>
    );
}

export { Footer };