import React from "react";
import { SubTitle } from "../SubTitle";
import "./styles.css";
import { AppContext } from "../../../Context";
import { formatNumbers } from "../../../utils/formatNumbers";

const ToolTipMap = ({ content }) => {
    const context = React.useContext(AppContext);

    return (
        <div className="tool-tip-container">
            <SubTitle
                text={"Seleccione con el cursor el departamento de su interés"}
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
                <p>Ofertas de Empleo: </p>
                {context.selectedDepartment && context.vacantesData?.total_departments?.length <= 1 ?
                    <p>{
                        formatNumbers(context.vacantesData?.total_departments[0]?.total) || 
                        formatNumbers(context.vacantesData?.total_registros)}
                    </p> : 
                    <p>{formatNumbers(content.totalVacantes)}</p>
                }
            </div>
            {context.selectedDepartment &&
                <button
                    onClick={() => {
                        context.clearSelectedDepartment()
                        context.clearSelectedMunicipio();
                    }}
                >
                    Borrar Selección
                </button>
            }
        </div>
    );
}

export { ToolTipMap };