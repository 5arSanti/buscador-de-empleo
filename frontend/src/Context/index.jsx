import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
    const domain = "http://localhost:3080";
	const api = `${domain}/api/v1`;

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);

    //LOADING, ERROR
    const [loading, setLoading] = React.useState(null);


    // VACANTES:
    const [vacantesData, setVacantesData] = React.useState({});

    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    const [searchValue, setSearchValue] = React.useState("");

    const [filters, setFilters] = React.useState({
        RANGO_SALARIAL: "",
        NOMBRE_PRESTADOR: "",
        TELETRABAJO: "",
        TIPO_CONTRATO: "",
        NIVEL_ESTUDIOS: "",
        DEPARTAMENTO: "",
        HIDROCARBUROS: "",
        PLAZA_PRACTICA: "",
        BUSQUEDA: "",
        DESCRIPCION_VACANTE: "",
    });

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
        setCurrentPage(1);
    };

    const handleSearch = (searchValue) => {
        handleFilterChange("BUSQUEDA", searchValue);
    };

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
        try {
            setLoading(true);
            const filterParams = new URLSearchParams(filters);

            const endpoints = [
                `vacantes/resultados?page=${page}&${filterParams.toString()}`,
                "filters"
                /* otros endpoints */
            ];

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
        finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchAllData(currentPage);
    }, [currentPage, filters]);
  
        //Pagination Controllers
    const handlePagination = (type) => {
        if (type === 1) 
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        else if (type == 2)
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        else
            setCurrentPage(1);
    }



    //CAMBIO DE COLORES
    const [activeButton, setActiveButton] = React.useState(1);
    const [activeHighContrast, setActiveHighContrast] = React.useState(false);

    React.useEffect(() => {
        handleColorsByFilters();
    }, [activeHighContrast])

    const handleColorsByFilters = (type = activeButton) => {
        setActiveButton(type);
        const root = document.documentElement;        

        console.log(activeHighContrast);
        if(activeHighContrast) {
            root.style.setProperty("--navbar-color", "#000000");
            root.style.setProperty("--navbar-responsive-color", "rgba(0, 0, 0, 0.75)");
            root.style.setProperty("--main-body-color", "#434343");
            root.style.setProperty('--main-title-color', 'rgb(255, 255, 255)');
            root.style.setProperty('--all-info-container-color', '#353535');
            root.style.setProperty('--input-and-info-container-color', '#000000');
            root.style.setProperty('--municipios-and-result-border-clicked', '#434343');
            root.style.setProperty("--tool-tip-map-text-color", "#FFFFFF");
            return;
        }

        switch (type) {
            case 1:
                root.style.setProperty("--navbar-color", "#00589c");
                root.style.setProperty("--navbar-responsive-color", "rgba(65, 114, 255, 0.75)");
                root.style.setProperty("--main-body-color", "#EEFAFF");
                root.style.setProperty('--main-title-color', 'rgb(0, 105, 142)');
                root.style.setProperty('--all-info-container-color', '#DCF6FF');
                root.style.setProperty('--input-and-info-container-color', '#6ABFE1');
                root.style.setProperty('--municipios-and-result-border-clicked', '#5D59DC');
            break;
            case 2:
                root.style.setProperty("--navbar-color", "#9C0000");
                root.style.setProperty("--navbar-responsive-color", "rgba(255, 14, 14, 0.75)");
                root.style.setProperty("--main-body-color", "#FFEEEE");
                root.style.setProperty('--main-title-color', 'rgb(142, 0, 0)');
                root.style.setProperty('--all-info-container-color', '#FFDCDC');
                root.style.setProperty('--input-and-info-container-color', '#E16A6A');
                root.style.setProperty('--municipios-and-result-border-clicked', '#DC5959');
            break;
            case 3:
                root.style.setProperty("--navbar-color", "#009C5F");
                root.style.setProperty("--navbar-responsive-color", "rgba(35, 223, 129, 0.75)");
                root.style.setProperty("--main-body-color", "#EEFFF5");
                root.style.setProperty('--main-title-color', 'rgb(0, 105, 77)');
                root.style.setProperty('--all-info-container-color', '#DCFFEC');
                root.style.setProperty('--input-and-info-container-color', '#6AE197');
                root.style.setProperty('--municipios-and-result-border-clicked', '#4BC472');
            break;
            case 4:
                root.style.setProperty("--navbar-color", "#9C7B00");
                root.style.setProperty("--navbar-responsive-color", "rgba(255, 223, 65, 0.75)");
                root.style.setProperty("--main-body-color", "#FFFCEE");
                root.style.setProperty('--main-title-color', 'rgb(105, 77, 0)');
                root.style.setProperty('--all-info-container-color', '#FFF8DC');
                root.style.setProperty('--input-and-info-container-color', '#E1CA6A');
                root.style.setProperty('--municipios-and-result-border-clicked', '#C4A34B');
            break;
            case 5:
                root.style.setProperty("--navbar-color", "#23009C");
                root.style.setProperty("--navbar-responsive-color", "rgba(111, 65, 255, 0.75)");
                root.style.setProperty("--main-body-color", "#F2EEFF");
                root.style.setProperty('--main-title-color', 'rgb(22, 0, 105)');
                root.style.setProperty('--all-info-container-color', '#E3DCFF');
                root.style.setProperty('--input-and-info-container-color', '#816AE1');
                root.style.setProperty('--municipios-and-result-border-clicked', '#684BC4');
            break;
            case 6:
                root.style.setProperty("--navbar-color", "#9C0055");
                root.style.setProperty("--navbar-responsive-color", "rgba(255, 65, 166, 0.75)");
                root.style.setProperty("--main-body-color", "#FFEEF6");
                root.style.setProperty('--main-title-color', 'rgb(142, 0, 73)');
                root.style.setProperty('--all-info-container-color', '#FFDCEE');
                root.style.setProperty('--input-and-info-container-color', '#E16AA9');
                root.style.setProperty('--municipios-and-result-border-clicked', '#C44B8B');
            break;    
            default:
                root.style.setProperty("--navbar-color", "#00589c");
                root.style.setProperty("--navbar-responsive-color", "rgba(65, 114, 255, 0.75)");
                root.style.setProperty("--main-body-color", "#EEFAFF");
                root.style.setProperty('--main-title-color', 'rgb(0, 105, 142)');
                root.style.setProperty('--all-info-container-color', '#DCF6FF');
                root.style.setProperty('--input-and-info-container-color', '#6ABFE1');
                root.style.setProperty('--municipios-and-result-border-clicked', '#5D59DC');
                root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B")
            break;
        }
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
    const [selectedDepartment, setSelectedDepartment] = React.useState(null);
    const [tooltipContent, setTooltipContent] = React.useState('');

    const saveSelectedDepartment = (name) => {
        handleFilterChange("DEPARTAMENTO", name)
        setSelectedDepartment(name);
    }
    const clearSelectedDepartment = () => {
        handleFilterChange("DEPARTAMENTO", "")
        setSelectedDepartment(null);
    }

    const handleMapMouseEnter = (event, department) => {
        const departmentData = vacantesData?.total_departments?.find((data) => data.department === department.properties.NOMBRE_DPT);

        if (departmentData) {
            setTooltipContent({
                department: department.properties.NOMBRE_DPT,
                totalVacantes: departmentData.total,
            });
        } else {
            setTooltipContent({
                department: department.properties.NOMBRE_DPT,
                totalVacantes: 0,
            });
        }
    };
    
    const handleMapMouseLeave = () => {
        setTooltipContent('');
    };




    return (
        <AppContext.Provider
            value={{
                apiUri,
                loading,
                setLoading,

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
                saveSelectedDepartment,
                clearSelectedDepartment,

                selectedDepartment,
                setSelectedDepartment,
                tooltipContent,
                setTooltipContent,
                handleMapMouseEnter,
                handleMapMouseLeave,

                //Filtros y paginacion
                setFilters,
                handleFilterChange,
                handlePagination,
                setCurrentPage,
                searchValue,
                setSearchValue,
                handleSearch,

                //COLORES POR FILTRO
                handleColorsByFilters,
                activeButton,
                setActiveButton,
                activeHighContrast,
                setActiveHighContrast,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}