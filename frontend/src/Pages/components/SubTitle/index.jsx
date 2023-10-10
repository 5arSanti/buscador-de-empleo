import "./styles.css";

const SubTitle = ({text, fontSize = 18}) => {
    return(
        <p className="sub-title" style={{
            fontSize: fontSize,
        }}>
            {text}
        </p>
    );
}

export { SubTitle };