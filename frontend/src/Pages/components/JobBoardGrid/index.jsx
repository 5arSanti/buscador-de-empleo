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
                onCLick={() => context.handleFilterChange("HIDROCARBUROS", "")}
            />
            <JobBoardCard
                icon={<PiGasCanFill/>}
                text={"Hidrocarburos"}
                onCLick={() => context.handleFilterChange("HIDROCARBUROS", 1)}
            />
            <JobBoardCard
                icon={<BsFillPersonFill/>}
                text={"Joven"}
            />
            <JobBoardCard
                icon={<HiUserGroup/>}
                text={"Jóvenes"}
            />
            <JobBoardCard
                icon={<MdElderly/>}
                text={"Adulto Mayor"}
            />
        </FiltersWrapper>
    );
}

export { JobBoardGrid };