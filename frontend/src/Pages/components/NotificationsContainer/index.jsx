import React from "react";
import { AppContext } from "../../../Context";

import { NotificationCard } from "./NotificationCard";
import "./styles.css";

import { MdOutlineDone } from "react-icons/md";
import { IoIosCloseCircleOutline  } from "react-icons/io";
import { CiTimer  } from "react-icons/ci";


const NotificationsContainer = () => {
    const context = React.useContext(AppContext)

    return(
        <div className="notifications-container">

            {context.allOk?.status &&
                <NotificationCard
                    text={context.allOk?.message}
                    type={"ok"}
                    icon={<MdOutlineDone/>}
                />
            }
            {context.error?.status &&
                <NotificationCard
                    text={`Error: ${context.error?.message}`}
                    type={"err"}
                    icon={<IoIosCloseCircleOutline/>}
                />
            }
            {context.time !== null && 
                <NotificationCard
                    text={`${context.time} ms`}
                    type={"time"}
                    icon={<CiTimer/>}
                />
            }
        </div>
    );
}

export { NotificationsContainer };