import "./styles.css";

const NotificationCard = ({text="Placeholder", type="time", icon}) => {
    
    return(
        <div className={`notification-card-container ${type}`}>
            {icon}
            <p>{text}</p>
        </div>
    );
}

export { NotificationCard }