import { NavIcons } from "../NavIcons";
import { SubTitle } from "../SubTitle";
import { PlacesOfInterestIcons } from "../PlacesOfInterestIcons";
import { IconLayout } from "../PlacesOfInterestIcons/IconLayout";

import "./styles.css";

import { BsFillBuildingFill } from "react-icons/bs";
import React from "react";
import { AppContext } from "../../../Context";
import { formatNumbers } from "../../../utils/formatNumbers";

const Footer = () => {
    const context = React.useContext(AppContext)

    let date = new Date();
    let year = date.getFullYear();

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
                        <p>Visitas Diarias: {context.visits?.TotalVisitasDiarias}</p>
                        <p>Visitas Totales: {context.visits?.TotalVisitasTotales}</p>
                    </div>
                    <p>{context.actualDate()}</p>
                </div>

                <div className="footer-copy-container">
                    <div className="footer-icons">
                        <NavIcons
                            flexDirection={"row"}
                        />
                    </div>
                    <p>&copy; {year} Servicio Publico de Empleo</p>
                </div>
            </div>

        </footer>
    );
}

const SecondaryFooter = () => {
    const context = React.useContext(AppContext);
    
    let date = new Date();
    let year = date.getFullYear();

    return(
        <div className="second-footer-container blue-color">
            <div className="daily-and-date-container">
                <div>
                    <p>Visitas Diarias: {formatNumbers(context.visits?.TotalVisitasDiarias)}</p>
                    <p>Visitas Totales: {formatNumbers(context.visits?.TotalVisitasTotales)}</p>
                </div>
                <p>{context.actualDate()}</p>
            </div>

            <div className="footer-copy-container">
                <div className="footer-icons">
                    {/* <NavIcons
                        flexDirection={"row"}
                    /> */}
                </div>
                <p>&copy; {year} Servicio Publico de Empleo</p>
            </div>
        </div>
    );
}

export { Footer, SecondaryFooter };