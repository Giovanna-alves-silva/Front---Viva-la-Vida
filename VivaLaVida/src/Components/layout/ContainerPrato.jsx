import React from 'react'
import style from "./ContainerPrato.module.css"

const ContainerPrato = (props) => {
    return (
        <div className={style.container_prato}>
            {props.children}
        </div>
    )
}

export default ContainerPrato;
