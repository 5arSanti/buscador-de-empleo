import "./styles.css";

const NavigationButton = ({children, title, onClick, className}) => {
    return(
        <button
            title={title}
            onClick={onClick}
            className={`navigation-button ${className}`}
        >
            {children}
        </button>
    );
}

export { NavigationButton };