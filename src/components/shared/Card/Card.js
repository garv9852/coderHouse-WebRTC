import React from 'react'
import styles from "./Card.module.css"
function Card({ title, icon, children,style}) {
  return (
    <div style={style} className={styles.card}>
      {
        title && 
        <div className={styles.headingWrapper}>
          <img src={`/images/${icon}.png`} />
          <h1 className={styles.heading}>{title}</h1>
        </div>
      }
      {children}
    </div>
  )
}

export default Card