import { FiExternalLink } from "react-icons/fi";

import "./styles.css"

const AnchorButton = ({data, imagen, handleClick, hovered, type=0}) => {
    const handleHover = () => {
        if (type === 0) {
            return(
                <a onClick={handleClick} href={data.URL_DETALLE_VACANTE} rel="noopener noreferrer" target="_blank" >
                    <div>
                        <FiExternalLink/>
                    </div>

                    {/* <img src={imagen} alt={`alt_${imagen}`} /> */}
                    <p>Ir a la Oferta <FiExternalLink/></p>
                </a>
            )
        } else {
            return(
                <a onClick={handleClick} href={data.URL_DETALLE_VACANTE} rel="noopener noreferrer" target="_blank" >
                    {hovered &&
                        <div>
                            <FiExternalLink/>
                        </div>
                    }

                    {/* <img src={imagen} alt={`alt_${imagen}`} /> */}
                    <p>Ir a la Oferta <FiExternalLink/></p>
                </a>
            )
        }
    } 


    return (
        handleHover()
    )
}

export { AnchorButton };