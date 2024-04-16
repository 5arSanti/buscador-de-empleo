import { banner, iconComplete } from "../../../assets";
import { NavImagesCard } from "./NavImagesCard";
import "./styles.css";

const GovNavbar = () => {

    return(
        <>
            <nav className="barra-superior-govco" aria-label="Barra superior">
                <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"  aria-label="Portal del Estado Colombiano - GOV.CO"></a>
            </nav>
            
            {/* <NavImagesCard/> */}
            
        </>

    );
}

export { GovNavbar }