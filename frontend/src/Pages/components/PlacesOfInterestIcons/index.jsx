import { BiSolidGroup } from "react-icons/bi"; 
import { BiSolidFactory } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6"; 
import { MdAnalytics } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { PiStampFill } from "react-icons/pi";


import "./styles.css";
import { IconLayout } from "./IconLayout";

const PlacesOfInterestIcons = ({flexDirection = "row", gap = 20}) => {
    return (
        <div className="places-of-interest-icons-container" style={{
            flexDirection: flexDirection,
            gap: gap
        }}>
            <IconLayout
                title={"Atención a Personas"}
                href={"https://www.serviciodeempleo.gov.co/atencion-al-ciudadano"}
                icon={<BiSolidGroup/>}
            />
            <IconLayout
                title={"Atención a Empresas"}
                href={"https://www.serviciodeempleo.gov.co/atencion-al-ciudadano"}
                icon={<BiSolidFactory/>}
            />
            <IconLayout
                title={"Puntos de Atención"}
                href={"https://www.serviciodeempleo.gov.co/busca-empleo/puntos-atencion"}
                icon={<FaMapLocationDot/>}
            />
            <IconLayout
                title={"Analítica"}
                href={"https://www.serviciodeempleo.gov.co/busca-empleo/buscador-de-vacantes/analitica"}
                icon={<MdAnalytics/>}
            />
            <IconLayout
                title={"Estudios e Investigaciones del Mercado Laboral"}
                href={"https://www.serviciodeempleo.gov.co/informacion-estadistica"}
                icon={<BiSearchAlt/>}
            />
            <IconLayout
                title={"Agencias de Empleo Autorizadas"}
                href={"https://www.serviciodeempleo.gov.co/busca-empleo/puntos-atencion?"}
                icon={<PiStampFill/>}
            />
            
            

        </div>
    );

}
export {PlacesOfInterestIcons}