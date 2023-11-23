import React from "react";
import { SubTitle } from "../SubTitle";
import "./styles.css";
import { AppContext } from "../../../Context";

const ToolTipMap = ({ content }) => {
    const context = React.useContext(AppContext);

    return (
        <div className="tool-tip-container">
            <SubTitle
                text={"Pase el cursor por encima o dele click al departamento para ver mas opciones"}
                fontSize={11}
                color={context.activeHighContrast ? "#FFFFFF" : "#7B7B7B"}
            />
            <div className="tool-tip-info-container">
                <p>Departamento:</p>
                {context.selectedDepartment ?
                    <p>{context.selectedDepartment}</p> : <p>{content.department}</p>
                }
            </div>

            <div className="tool-tip-info-container">
                <p>Vacantes: </p>
                {context.selectedDepartment && context.vacantesData.total_departments.length <= 1 ?
                    <p>{
                        context.vacantesData?.total_departments[0]?.total || 
                        context.vacantesData?.total_registros}
                    </p> : 
                    <p>{content.totalVacantes}</p>
                }
            </div>
            {context.selectedDepartment &&
                <button
                    onClick={() => {context.clearSelectedDepartment()}}
                >
                    Borrar Selección
                </button>
            }
        </div>
    );
}

export { ToolTipMap };