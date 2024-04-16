import "./styles.css";

const ButtonCard = ({ text="Placeholder", onClick }) => {
    return(
        <button
            onClick={onClick}
            className="button-container"
        >
            {text}
        </button>
    );
}

const Button = ({children, className="button", onClick, title=""}) => {
    return(
        <button 
            className={`${className}`}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
}

export { ButtonCard, Button };