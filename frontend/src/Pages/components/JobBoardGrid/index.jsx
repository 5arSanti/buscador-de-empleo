import { MdElderly } from "react-icons/md";
import { FiltersWrapper } from "../FiltersWrapper";
import { JobBoardCard } from "./JobBoardCard";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBuildingFill, BsFillPersonFill } from "react-icons/bs";
import { PiGasCanFill } from "react-icons/pi";

import { SubTitle } from "../SubTitle";

import "./styles.css";
const JobBoardGrid = () => {
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
            />
            <JobBoardCard
                icon={<PiGasCanFill/>}
                text={"Hidrocarburos"}
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