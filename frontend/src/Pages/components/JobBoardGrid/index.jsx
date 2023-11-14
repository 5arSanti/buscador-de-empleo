import React from "react";

import { MdElderly } from "react-icons/md";
import { FiltersWrapper } from "../FiltersWrapper";
import { JobBoardCard } from "./JobBoardCard";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBuildingFill, BsFillPersonFill } from "react-icons/bs";
import { PiGasCanFill } from "react-icons/pi";

import { SubTitle } from "../SubTitle";

import "./styles.css";
import { AppContext } from "../../../Context";

const JobBoardGrid = () => {
    const context = React.useContext(AppContext);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={20}
            gap={10}
        >
            
            <SubTitle text={"Otras Bolsas"}/>


            <JobBoardCard
                icon={<BsFillBuildingFill/>}
                text={"Plaza de Prácticas"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "");
                    context.handleColorsByFilters(1);
                }}
            />
            <JobBoardCard
                icon={<PiGasCanFill/>}
                text={"Hidrocarburos"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", 1)
                    context.handleColorsByFilters(2);
                }}
            />
            <JobBoardCard
                icon={<BsFillPersonFill/>}
                text={"Joven"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleColorsByFilters(3);
                }}
            />
            <JobBoardCard
                icon={<HiUserGroup/>}
                text={"Jóvenes"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleColorsByFilters(4);
                }}
            />
            <JobBoardCard
                icon={<MdElderly/>}
                text={"Adulto Mayor"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleColorsByFilters(5);
                }}
            />
        </FiltersWrapper>
    );
}

export { JobBoardGrid };