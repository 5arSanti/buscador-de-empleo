//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

//App
import './App.css'
import "./App.css"

//Context
import { AppProvider } from "../../Context";


//Screens
import { Home } from "../Screens/Home";
import { SubscriptionScreen } from "../Screens/SubscriptionScreen";

// import { Navbar } from "../components/nabvar";
// import { NavBarResponsive } from "../components/NavBarResponsive";
import { Footer, SecondaryFooter } from "../components/Footer";
import { NotificationsContainer } from "../components/NotificationsContainer";
import { GovNavbar } from "../components/GovNavbars";
import { GovFooter } from "../components/GovFooter";
import { AccesibilityCard } from "../components/AccesibilityCard";
import { ExportModal } from "../components/ExportModal";
import { PopUpCard } from "../components/PopUpCard";


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
        // {path: "/subscription", element: <SubscriptionScreen/>},
        {path: "/*", element: <Navigate to={"/home"}/>},
    ]);
    
    return routes;
}

const App = () => {

    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <GovNavbar/>
                    <AccesibilityCard/>
                    <PopUpCard/>
                    <ExportModal/>

                    <AppRoutes/>
                    
                    <NotificationsContainer/>

                    <GovFooter/>
                    <SecondaryFooter/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

