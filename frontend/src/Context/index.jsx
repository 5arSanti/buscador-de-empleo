import React from "react";
import PropTypes from "prop-types";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
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
        // setTooltipPosition({ x: event.pageX, y: event.pageY });
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


            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}