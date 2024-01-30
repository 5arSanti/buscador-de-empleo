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

export { ButtonCard};