import PropsTypes from 'prop-types';

const Icon = ({ className, text })=>{
    const IconStyle = "icon-style";

    return(
        <i className={`${className}, ${IconStyle}`}>{children}</i>
    );

};

export default Icon