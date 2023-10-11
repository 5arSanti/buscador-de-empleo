import "./styles.css";

const IconLayout = ({children, href, title, icon}) => {
    return(
        <a className="icon-layout-container" href={href} title={title} target="__blank" rel="noopener noreferrer">
            {icon}
            {children}
        </a>
    );
}

export { IconLayout };