import PropTypes from "prop-types";

const FiltersOptionCard = ({id, title, array=[], onChange, defaultValue=""}) => {
    FiltersOptionCard.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <select 
                name={id} 
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                value={defaultValue}
            >
                <option value="">
                    Todo
                </option>
                {array?.map((item, index) => (
                    <option 
                        key={index}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
}

export { FiltersOptionCard };