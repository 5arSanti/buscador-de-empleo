import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    // API
    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
	const api = "http://localhost:3080/api/v1";

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);


    // VACANTES:
    const [vacantesData, setVacantesData] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch(`${apiUri}/vacantes`);
                const data = await response.json();
                setVacantesData(data);
            }
            catch (err){
                alert(err)
            }
        }
        fetchData()
    }, []);

    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const [toggleNavBarResponsive, setToggleNavBarResponsive] = React.useState(false);

    //ToolTipMap
    const [tooltipContent, setTooltipContent] = React.useState('');

    const handleMapMouseEnter = (event, department) => {
        setTooltipContent(department.properties.NOMBRE_DPT);
        };
    
        const handleMapMouseLeave = () => {
        setTooltipContent('');
        };




    return (
        <AppContext.Provider
            value={{
                //VACANTES
                vacantesData,
                setVacantesData,

                //NavBar Responsive
                toggleNavBarResponsive,
                setToggleNavBarResponsive,

                //Tamaño de la pantalla
                windowWidth,
                setWindowWidth,

                //Eventos del Mapa
                tooltipContent,
                setTooltipContent,
                handleMapMouseEnter,
                handleMapMouseLeave,





            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}