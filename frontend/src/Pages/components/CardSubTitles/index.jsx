import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";

const CardSubTitles = ({children}) => {
    const context = React.useContext(AppContext);

    if (context.windowWidth <= 750) {
        return(
            <span>{children} <br /></span>
        );
    }
}

export { CardSubTitles };