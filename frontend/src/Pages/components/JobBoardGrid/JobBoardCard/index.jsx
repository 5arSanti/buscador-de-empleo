import "./styles.css";

const JobBoardCard = ({icon, text, onClick, isActive}) => {
    return(
        <button 
            className={`job-board-container ${isActive ? "job-board-active" : ""}`}
            onClick={() => {onClick()}}
            title={text}
        >
            {icon}
            <p>{text}</p>
        </button>
    );
}

export { JobBoardCard };