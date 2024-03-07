import React from "react";
import PropTypes from "prop-types";

import PropertiesReader from "properties-reader";

import { TextEncoder, TextDecoder } from 'text-encoding';

export const AppContext = React.createContext();


const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }
    // const properties = PropertiesReader("../../app.properties.ini");

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
    const domain = "http://localhost:3080";
    // const domain = "https://ambientesdepruebas.serviciodeempleo.gov.co";

    const api = `${domain}/qabackbue/v1`;
	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);
    

    //LOADING, ERROR
    const [loading, setLoading] = React.useState(null);

    const [allOk, setAllOk] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [time, setTime] = React.useState(null);

    //Visitas Diarias y totales
    const [visits, setVisits] = React.useState(null)

    const obtenerEstadisticas = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${apiUri}/estadisticas/visitas`, {
                method: 'GET',
            });
    
            if (response.ok) {
                const estadisticas = await response.json();
                setVisits(estadisticas);
            } else {
                throw new Error("Error registrando visita");
            }
        } 
        catch (err) {
            handleNotifications('err', err.message);
        }
        finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        obtenerEstadisticas();
      }, []);


    // VACANTES:
    const [vacantesData, setVacantesData] = React.useState(null);

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
            const response = await fetch(`${apiUri}/${endpoint}`,{
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                  },
            });

            if (!response.status === 200) {
                throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
            }

            const buffer = await response.arrayBuffer();

            // Try different encodings if the first attempt fails
            let data = "";
            for (const encoding of ['utf-8']) {
                try {
                    const decoder = new TextDecoder(encoding);
                    data = decoder.decode(buffer);

                    break; // Stop iterating if decoding is successful
                } catch (error) {
                    console.log(`Decoding with ${encoding} failed:`, error);
                }
            }
        
            if (!data) {
              throw new Error('Unable to decode response data');
            }
        
            return JSON.parse(data);
        }
        catch (err) {
            console.log(err)
            throw new Error(`Error fetching ${endpoint}: ${err.message}`);
        }
    };

    const fetchAllData = async (page) => {
        setLoading(true);
        const startTime = performance.now();
        try {


            const filterParams = new URLSearchParams(filters);

            const endpoints = [
                `vacantes/resultados?page=${page}&${filterParams.toString()}`,
                "filters",
                "estadisticas/vacantes/obtener"
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
            handleNotifications("err", err.message);
        }
        finally {
            const endTime = performance.now();
            const duration = (endTime - startTime).toFixed(1);

            handleNotifications("time", duration)
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

        if(activeHighContrast) {
            root.style.setProperty("--navbar-color", "#000000");
            root.style.setProperty("--navbar-responsive-color", "rgba(0, 0, 0, 0.75)");
            root.style.setProperty("--main-body-color", "#737373");
            root.style.setProperty('--main-title-color', 'rgb(255, 255, 255)');
            root.style.setProperty('--all-info-container-color', '#353535');
            root.style.setProperty('--input-and-info-container-color', '#000000');
            root.style.setProperty('--municipios-and-result-border-clicked', '#737373');
            root.style.setProperty("--tool-tip-map-text-color", "#FFFFFF");
            root.style.setProperty("--confirm-color", "#737373");
            root.style.setProperty("--cancel-color", "#737373");
            root.style.setProperty("--time-color", "#737373");
            root.style.setProperty("--result-subtitle-card", "#000000");
            root.style.setProperty("--gov-accesibility-card", "#000000");
            return;
        }

        switch (type) {
            case 1:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#681d35');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#81ABFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#681d35");
            break;
            case 2:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#681d35');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#9DBEFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#681d35");
            break;
            case 3:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#681d35');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#4A7EFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#681d35");
            break;
            case 4:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#681d35');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#9DBEFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#681d35");
            break;
            case 5:
                root.style.setProperty("--navbar-color", "#23009C");
                root.style.setProperty("--navbar-responsive-color", "rgba(111, 65, 255, 0.75)");
                root.style.setProperty("--main-body-color", "#F2EEFF");
                root.style.setProperty('--main-title-color', 'rgb(22, 0, 105)');
                root.style.setProperty('--all-info-container-color', '#E3DCFF');
                root.style.setProperty('--input-and-info-container-color', '#816AE1');
                root.style.setProperty('--municipios-and-result-border-clicked', '#684BC4');
                root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
                root.style.setProperty("--confirm-color", "#74C59A");
                root.style.setProperty("--cancel-color", "#DA4F6A");
                root.style.setProperty("--time-color", "#4172FF");
                root.style.setProperty("--result-subtitle-card", "rgb(22, 0, 105)");
            break;
            case 6:
                root.style.setProperty("--navbar-color", "#9C0055");
                root.style.setProperty("--navbar-responsive-color", "rgba(255, 65, 166, 0.75)");
                root.style.setProperty("--main-body-color", "#FFEEF6");
                root.style.setProperty('--main-title-color', 'rgb(142, 0, 73)');
                root.style.setProperty('--all-info-container-color', '#FFDCEE');
                root.style.setProperty('--input-and-info-container-color', '#E16AA9');
                root.style.setProperty('--municipios-and-result-border-clicked', '#C44B8B');
                root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
                root.style.setProperty("--confirm-color", "#74C59A");
                root.style.setProperty("--cancel-color", "#DA4F6A");
                root.style.setProperty("--time-color", "#4172FF");
                root.style.setProperty("--result-subtitle-card", "rgb(142, 0, 73)");
            break;    
            default:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#681d35');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#81ABFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#681d35");
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


    const handleNotifications = (type = null, message) => {
        switch(type) {
            case "ok" : 
                setAllOk({
                    status: true,
                    message: message
                })
                setTimeout(() => {
                    setAllOk({
                        status: false
                    })
                }, 4000);
            break;
            case "err" : 
                setError({
                    status: true,
                    message: message
                })
                setTimeout(() => {
                    setError({
                        status: false
                    })
                }, 4000);
            break;
            case "time" : 
                setTime(message)
                setTimeout(() => {
                    setTime(null)
                }, 6000);
            break;
        }
    }

    const actualDate = () => {
        const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const fecha = new Date();
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

        const fechaCapitalizada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
      
        return fechaCapitalizada;
    }

    const handleDateFilterChange = (value) => {
        let dateFilter = "";
    
        // Lógica para determinar el filtro de fecha según la opción seleccionada
        const today = new Date();
        const oneWeekAgo = new Date((today.getTime() - 8 * 24 * 60 * 60 * 1000));
        const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    
        switch(value) {
            case "Hoy":
                dateFilter = today.toISOString().split('T')[0];
                break;
            case "Última semana":
                dateFilter = oneWeekAgo.toISOString().split('T')[0];
                break;
            case "Último mes":
                dateFilter = oneMonthAgo.toISOString().split('T')[0];
                break;
            default:
                dateFilter = "";
        }
    
        // Actualizar los filtros
        handleFilterChange("FECHA_CREACION", dateFilter);
    };


    return (
        <AppContext.Provider
            value={{
                apiUri,
                loading,
                setLoading,

                allOk,
                setAllOk,
                error,
                setError,
                time,
                setTime,

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

                actualDate,
                visits,

                handleNotifications,
                handleDateFilterChange,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}