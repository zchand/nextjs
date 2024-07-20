import PropTypes from "prop-types";

function CustomImage({ className, src, alt }) {

  return (
    <img className={`${className} min-h-[400px] w-full max-h-[300px]`} src={src} alt={alt} />
  );
}

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CustomImage;