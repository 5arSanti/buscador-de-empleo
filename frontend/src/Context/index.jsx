import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    // API
    const [api, setApi] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch("http://localhost:3080/oferts");
                const data = await response.json();
                setApi(data);
                // await setTimeout(() =>{
                //     setLoading(false);
                // }, 1000) 
            }
            catch (err){
                alert(err)
                // setError(true)
                // setLoading(false);
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
                toggleNavBarResponsive,
                setToggleNavBarResponsive,
                windowWidth,
                setWindowWidth,

                tooltipContent,
                setTooltipContent,
                handleMapMouseEnter,
                handleMapMouseLeave,
                api, 
                setApi,


            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}