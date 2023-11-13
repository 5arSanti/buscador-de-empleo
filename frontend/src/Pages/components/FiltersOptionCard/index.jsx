import PropTypes from "prop-types";

const FiltersOptionCard = ({id, title, array}) => {
    FiltersOptionCard.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        array: PropTypes.array.isRequired,
    }

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <select name={id} id={id}>
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