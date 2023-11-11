import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
	const api = "http://localhost:3080/api/v1";

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);




    // VACANTES:
    const [vacantesData, setVacantesData] = React.useState({});

    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [results, setResults] = React.useState([]);

    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${apiUri}/${endpoint}`);

            if (!response.status === 200) {
                throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
            }
    
            return await response.json();

        }
        catch (err) {
            throw new Error(`Error fetching ${endpoint}: ${err.message}`);
        }
    };

    const fetchAllData = async (page) => {
        const endpoints = [
            "vacantes/total",
            `vacantes/resultados?page=${page}`
            /* otros endpoints */
        ];

        try {
            // Realizar todas las solicitudes en paralelo
            const resultsArray = await Promise.all(endpoints.map(fetchData));

            const combinedResults = resultsArray.reduce((acc, result) => {
                return { ...acc, ...result };
            }, {});

            setVacantesData(combinedResults);
            setTotalPages(combinedResults.totalPages);

        } catch (err) {
            alert(err.message);
        }
    };

    React.useEffect(() => {
        fetchAllData(currentPage);
    }, [currentPage]);
  
        //Pagination Controllers
    const handlePagination = (type) => {
        if (type === 1) 
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        else if (type == 2)
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        else
            setCurrentPage(1);
    }


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
                apiUri,

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

                handlePagination,
                setCurrentPage

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}