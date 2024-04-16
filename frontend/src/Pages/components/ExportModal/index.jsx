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

    const { vacantesData } = context;

    const filteredData = vacantesData?.resultados?.map(item => ({
        CODIGO_VACANTE: item.CODIGO_VACANTE,
        TITULO_VACANTE: item.TITULO_VACANTE,
        DESCRIPCION_VACANTE: item.DESCRIPCION_VACANTE,
        NIVEL_ESTUDIOS: item.NIVEL_ESTUDIOS,
        RANGO_SALARIAL: item.RANGO_SALARIAL,
        NOMBRE_PRESTADOR: item.NOMBRE_PRESTADOR,
        DEPARTAMENTO: item.DEPARTAMENTO,
        MUNICIPIO: item.MUNICIPIO,
        TIPO_CONTRATO: item.TIPO_CONTRATO,
        URL_DETALLE_VACANTE: item.URL_DETALLE_VACANTE,
        CANTIDAD_VACANTES: item.CANTIDAD_VACANTES,
        CARGO: item.CARGO,
        FECHA_PUBLICACION: item.FECHA_PUBLICACION,
        FECHA_VENCIMIENTO: item.FECHA_VENCIMIENTO,
        SECTOR_ECONOMICO: item.SECTOR_ECONOMICO,
        TELETRABAJO: item.TELETRABAJO,
        DISCAPACIDAD: item.DISCAPACIDAD,
        MESES_EXPERIENCIA_CARGO: item.MESES_EXPERIENCIA_CARGO,
        HIDROCARBUROS: item.HIDROCARBUROS,
        PLAZA_PRACTICA: item.PLAZA_PRACTICA,
    }));

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
                        onClick={() => {context.exportToExcel(filteredData)}}
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