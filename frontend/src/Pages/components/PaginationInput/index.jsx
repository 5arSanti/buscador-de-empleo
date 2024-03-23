import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css"

const PaginationInput = () => {
    const context = React.useContext(AppContext);

    return(
        <p className="pagination-input-container">Pagina 
            <input 
                type="text" 
                pattern="[0-9]"
                placeholder={context.vacantesData?.currentPage}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        const pageNumber = parseInt(event.target.value);
                        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= context.vacantesData?.totalPages) {
                            context.setCurrentPage(pageNumber);
                            event.target.value = "";
                        } else {
                            event.target.value = "";
                        }
                    }
                }}
            />
            de {context.vacantesData?.totalPages}
        </p>
    );
}

export { PaginationInput };