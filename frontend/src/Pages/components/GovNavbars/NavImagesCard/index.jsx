import { banner, iconComplete } from "../../../../assets";

import "./styles.css";

const NavImagesCard = () => {
    return(
        <div className="container-logo-header-govco">
            <a className="logo-header-govco" rel="noopener noreferrer" target="_blank" href="https://www.buscadordeempleo.gov.co/">
                <span className="">
                    <img src={iconComplete} alt="icono-SPE" />
                    <img src={banner} alt="icono-BUE" />
                </span>
            </a>
        </div>
    );
}

export { NavImagesCard };