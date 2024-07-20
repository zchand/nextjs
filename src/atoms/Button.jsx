import React from 'react'

function Button({className, text, type, action}) {
    
    return (
        <button className={className} type={type} onClick={action}>{text}</button>
    )
}

export default Button
