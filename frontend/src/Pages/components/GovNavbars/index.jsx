import { banner, iconComplete } from "../../../assets";
import "./styles.css";

const GovNavbar = () => {
    window.addEventListener("load", function() {
        initTopBar();
    });
    
    
    function initTopBar() {
        const translateElement = document.querySelector(".idioma-icon-barra-superior-govco");
        translateElement.addEventListener("click", translate, false);
    
        function translate() {
            // ... // Implementar traducción
        }
    }

    return(
        <>
            <nav className="barra-superior-govco" aria-label="Barra superior">
                <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"  aria-label="Portal del Estado Colombiano - GOV.CO"></a>
                <button onClick={initTopBar} className="idioma-icon-barra-superior-govco float-right" aria-label="Button to change the language of the page to English"></button>
            </nav>
            <div className="container-logo-header-govco">
                <span className="logo-header-govco">
                </span>
            </div>
        </>

    );
}

export { GovNavbar }