import React from "react";
import { AppContext } from "../../../Context";
import { SubTitle2 } from "../SubTitle";

import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import "./styles.css";
import { NavigationButton } from "../NavigationButton";

const ExportModal = () => {
    const context = React.useContext(AppContext)

    if(context.openExportModal) {
        return(
            <div className="modal-container">
                <div className="modal-buttons-container">
                    <SubTitle2>Exportar resultados</SubTitle2>

                    <div className="info-container">
                        <p>La exportación puede durar unos momentos, por favor sea paciente.</p>
                    </div>

                    <NavigationButton 
                        title={"Cerrar"}
                        onClick={() => context.setOpenExportModal(!context.openExportModal)}
                        className={"top-right"}
                    >
                        <IoCloseOutline/>
                    </NavigationButton>
    
                    <button className="export-button excel" 
                        onClick={() => {context.exportToExcel(context.vacantesData?.resultados)}}
                        title="Exportar resultados como Excel"
                    >
                        <RiFileExcel2Line/> Excel
                    </button>

                    <button className="export-button pdf" 
                        onClick={() => context.toPDF()}
                        title="Exportar resultados como PDF"
                    >
                        <FaRegFilePdf/> PDF
                    </button>

                </div>
            </div>
        );
    }


}

export { ExportModal };