import React from "react";
import { AppContext } from "../../../Context";
import { SubTitle2 } from "../SubTitle";

import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import "./styles.css";

const ExportModal = () => {
    const context = React.useContext(AppContext)

    if(context.openExportModal) {
        return(
            <div className="modal-container">
                <div className="modal-buttons-container">
                    <SubTitle2>Exportar resultados como:</SubTitle2>
                    <div className="info-container">
                        <p>La exportación puede durar unos momentos, por favor sea paciente.</p>
                    </div>

                    <button className="button top-rigth" 
                        onClick={() => context.setOpenExportModal(!context.openExportModal)}
                        title="Cerrar"
                    >
                        <IoCloseOutline/>
                    </button>
    
                    <button className="export-button excel" 
                        onClick={() => {}}
                        title="Exportar resultados como Excel"
                    >
                        <RiFileExcel2Line/>
                        Excel
                    </button>
                    <button className="export-button pdf" 
                        onClick={() => context.toPDF()}
                        title="Exportar resultados como PDF"
                    >
                        <FaRegFilePdf/>
                        PDF
                    </button>

                </div>
            </div>
        );
    }


}

export { ExportModal };