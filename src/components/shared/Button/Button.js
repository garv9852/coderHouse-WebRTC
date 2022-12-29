import React from 'react'
import styles from './Button.module.css'
function Button({text,onClick,style}) {
  return (
    <button className={styles.button} onClick={onClick} style={style}>
        <span>{text}</span>
        <img className={styles.arrow} src="./images/arrow.png" alt="arrow"/>
    </button>
  )
}

export default Button