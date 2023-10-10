import "./styles.css";

const JobBoardCard = ({icon,text}) => {
    return(
        <button className="job-board-container">
            {icon}
            <p>{text}</p>
        </button>
    );
}

export { JobBoardCard };