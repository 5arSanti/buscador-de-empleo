import "./styles.css";

const SubTitle = ({text, fontSize = 18, color = "#FFF"}) => {
    return(
        <p className="sub-title" style={{
            fontSize: fontSize,
            color: color
        }}>
            {text}
        </p>
    );
}

export { SubTitle };