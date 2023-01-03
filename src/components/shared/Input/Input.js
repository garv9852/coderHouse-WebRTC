import React from 'react'
import styles from "./Input.module.css"
function Input(props) {
  return (
    <div>
        <input className={styles.inputCont} {...props}></input>
    </div>
  )
}

export default Input