//Dependencies
import React from "react";
import { BrowserRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

//App
import './App.css'
import "./App.css"

//Context
import { AppProvider } from "../../Context";


//Screens
import { Home } from "../Screens/Home";
import { SubscriptionScreen } from "../Screens/SubscriptionScreen";

import { Navbar } from "../components/nabvar";
import { NavBarResponsive } from "../components/NavBarResponsive";
import { Footer } from "../components/Footer";
import { NotificationsContainer } from "../components/NotificationsContainer";


const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/subscription", element: <SubscriptionScreen/>},
        {path: "/*", element: <Navigate to={"/home"}/>},
    ]);
    
    return routes;
}

const App = () => {

    return (
        <AppProvider>
            {/* <BrowserRouter basename="/bue"> */}
            <BrowserRouter>
                <Wrapper>
                    <Navbar/>
                    <NavBarResponsive/>
                    <AppRoutes/>
                    <NotificationsContainer/>
                    <Footer/>
                </Wrapper>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;

