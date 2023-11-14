import "./styles.css";

const JobBoardCard = ({icon, text, onClick}) => {
    return(
        <button 
            className="job-board-container"
            onClick={() => onClick()}
        >
            {icon}
            <p>{text}</p>
        </button>
    );
}

export { JobBoardCard };