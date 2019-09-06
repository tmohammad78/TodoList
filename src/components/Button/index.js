import React from 'react';
import './Button.scss';

const Button = ({className,children , ...props})=>{
    return (
        <button className={`${className}`}   {...props}   >
            {children}
        </button>
    )
}
export default Button;