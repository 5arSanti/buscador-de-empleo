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

import "./styles.css";

const SubTitle2 = ({children, color = "#FFF", textAlign = "center"}) => {
    return(
        <p className="sub-title" style={{
            color: color,
            textAlign: textAlign
        }}>
            {children}
        </p>
    );
}

export { SubTitle, SubTitle2 };