import React from "react";
import PropTypes from "prop-types";

import { TextDecoder } from 'text-encoding';
import { Resolution, usePDF } from "react-to-pdf";

import * as XLSX from 'xlsx';
import { formatDate } from "../utils/formatDate";

export const AppContext = React.createContext();


const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
    const domain = import.meta.env.VITE_API_DOMAIN;
    const apiStructure = import.meta.env.VITE_API_STRUCTURE;

    const api = `${domain}/${apiStructure}/v1`;
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

    const [filters, setFilters] = React.useState(null);
    // Valores de Respaldo
    // {
    //     RANGO_SALARIAL: "",
    //     NOMBRE_PRESTADOR: "",
    //     TELETRABAJO: "",
    //     TIPO_CONTRATO: "",
    //     NIVEL_ESTUDIOS: "",
    //     DEPARTAMENTO: "",
    //     MUNICIPIO: "",
    //     HIDROCARBUROS: "",
    //     PLAZA_PRACTICA: "",
    //     BUSQUEDA: "",
    //     DESCRIPCION_VACANTE: "",
    // }

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
        setCurrentPage(1);
    };

    const handleSearch = (searchValue) => {
        handleFilterChange("BUSQUEDA", searchValue);
    };

    const clearFilters = () => {
        setFilters(null);
        setSelectedDepartment(null);
        setSearchValue("")
        handleColorsByFilters(1);
        setSelectedDate("")
        setSelectedExperience("");
        setCurrentPage(1);
    }

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
            console.log(err)
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
                root.style.setProperty('--main-title-color', '#E0161E');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#81ABFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#E0161E");
            break;
            case 2:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#E0161E');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#9DBEFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#E0161E");
            break;
            case 3:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#E0161E');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#4A7EFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#E0161E");
            break;
            default:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#F6F8F9");
                root.style.setProperty('--main-title-color', '#E0161E');
                root.style.setProperty('--all-info-container-color', '#E6EFFD');
                root.style.setProperty('--input-and-info-container-color', '#81ABFF');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#E0161E");
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

    const clearSelectedMunicipio = () => {
        handleFilterChange("MUNICIPIO", "")
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


    const actualDate = (type = 1) => {
        const fecha = new Date();

        if(type === 1) {
            const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

            const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
            const fechaCapitalizada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
          
            return fechaCapitalizada;
        } else {
  
            const dia = String(fecha.getDate()).padStart(2, '0');
            const mes = String(fecha.getMonth() + 1).padStart(2, '0');
            const año = fecha.getFullYear();
            
            const horas = String(fecha.getHours()).padStart(2, '0');
            const minutos = String(fecha.getMinutes()).padStart(2, '0');
            const segundos = String(fecha.getSeconds()).padStart(2, '0');
            
            const fechaFormateada = `${dia}${mes}${año}-${horas}${minutos}${segundos}`;
            
            return fechaFormateada;
        }

    }

    const [selectedDate, setSelectedDate] = React.useState("");
    const handleDateFilterChange = (value) => {
        setSelectedDate(value)
        let dateFilter = "";
    
        const today = new Date();
        const yesterday = formatDate(new Date(today.getFullYear(), String(today.getMonth()), String(today.getDate() - 1)));
        const oneWeekAgo = formatDate(new Date((today.getTime() - 7 * 24 * 60 * 60 * 1000)));
        const oneMonthAgo = formatDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
    
        switch(value) {
            case "Ultimas vacantes publicadas":
                dateFilter = yesterday;
                break;
            case "Última semana":
                dateFilter = oneWeekAgo;
                break;
            case "Último mes":
                dateFilter = oneMonthAgo;
                break;
            default:
                dateFilter = "";
        }
    
        // Actualizar los filtros
        handleFilterChange("FECHA_PUBLICACION", dateFilter);
    };
    console.log(filters?.FECHA_PUBLICACION)

    const [selectedExperience, setSelectedExperience] = React.useState("");
    const handleExperienceFilterChange = (value) => {
        setSelectedExperience(value)
        let expereienceMonth = "";
    
        switch(value) {
            case "Menor a 6 Meses":
                expereienceMonth = "<= 6";
                break;
            case "Mayor a 6 Meses":
                expereienceMonth = "> 6";
                break;
            default:
                expereienceMonth = "";
        }
    
        // Actualizar los filtros
        handleFilterChange("MESES_EXPERIENCIA_CARGO", expereienceMonth);
    };

    // Abrir modal de exporte
    const [openExportModal, setOpenExportModal] = React.useState(false);
    const name = `BUE-${vacantesData?.currentPage}-${actualDate(2)}`;

    //Exportar a PDF
    const { toPDF, targetRef } = usePDF({
        filename: `${name}.pdf`,
        method: "open",
        resolution: Resolution.LOW
    });

    //Exportar a Excel
    const exportToExcel = (data) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, `Res_Vacantes-Pagina ${vacantesData?.currentPage}`);
        XLSX.writeFile(workbook, `${name}.xlsx`);
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
                filters,
                vacantesData,
                setVacantesData,

                //NavBar Responsive
                toggleNavBarResponsive,
                setToggleNavBarResponsive,

                //Tamaño de la pantalla
                windowWidth,
                setWindowWidth,

                //Eventos del Mapa
                selectedDepartment,
                setSelectedDepartment,
                saveSelectedDepartment,
                clearSelectedDepartment,
                clearSelectedMunicipio,

                tooltipContent,
                setTooltipContent,
                handleMapMouseEnter,
                handleMapMouseLeave,

                //Filtros y paginacion
                setFilters,
                handleFilterChange,
                clearFilters,
                handlePagination,
                setCurrentPage,
                searchValue,
                setSearchValue,
                handleSearch,
                selectedDate,

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
                selectedExperience,
                handleExperienceFilterChange,

                openExportModal,
                setOpenExportModal,
                exportToExcel,
                toPDF,
                targetRef
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}