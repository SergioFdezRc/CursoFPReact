
import React from "react";
import PropTypes from "prop-types";

function CustomButton({children, onClick, ...props}) {
    return (
        <button className="custom-button" onClick={onClick}>
            {children}
        </button>
    )
}

CustomButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

CustomButton.defaultProps = {
    children: "Button"
}

export default CustomButton;