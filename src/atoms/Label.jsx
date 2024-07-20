import PropTypes from 'prop-types';

const Label = ({ className, text, htmlFor }) => {
    const labelStyle = "block text-gray-700 font-medium ptr-label";
    return (
        <label className={`${className}, ${labelStyle}`} htmlFor={htmlFor}>
            {text}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Label;