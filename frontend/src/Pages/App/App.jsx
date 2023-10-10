//Dependencies
import React from "react";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";

//App
import './App.css'

//Context
import { AppProvider } from "../../Context";


//Screens
import { Home } from "../Screens/Home";
import { Navbar } from "../components/nabvar";
import { NavBarResponsive } from "../components/NavBarResponsive";


const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>},
    ]);
    
    return routes;
}

const App = () => {
    // const context = React.useContext();

    return (
        <AppProvider>
            <BrowserRouter>
                <Wrapper>
                    <Navbar/>
                    {/* {context.toggleNavBarResponsive && <NavBarResponsive/>} */}
                    <AppRoutes/>
                </Wrapper>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
