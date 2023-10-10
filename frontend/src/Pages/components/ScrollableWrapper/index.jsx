import "./styles.css";

const ScrollableWrapper = ({children,  maxHeight = 250}) => {
    return(
        <div className="scrollable-wrapper-container" style={{
            maxHeight: maxHeight
        }}>
            {children}     
        </div>
    );
}

export { ScrollableWrapper };