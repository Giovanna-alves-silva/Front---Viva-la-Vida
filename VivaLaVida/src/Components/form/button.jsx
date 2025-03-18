import React from 'react';
import style from './button.module.css'

const Button = ({label, styleType, onClick}) => {
    return(
        <div>

            <button className={`${style.button} ${style[styleType]}`} onClick={onClick}>
                {label}
            </button>

        </div>
    )
}

export default Button;