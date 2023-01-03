import React from 'react'
import styles from "./Rooms.module.css"
function Rooms() {
  return (
    <div className={styles.roomsContainer}>
      <div className={styles.roomsBox}>
        <div className={styles.roomsBarContainer}>
          <div className={styles.searchBarContainer}>
            <div style={{borderBottom:"solid rgb(6, 95, 238) 2px"}}>All Voice Rooms</div>
            <svg className={styles.searchIcons} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#C4C5C5" d="M12.5 11h-.79l-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5Zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11Z"/></svg>
            <input className={styles.searchBar} />
          </div>
          <div>
            <button className={styles.newRoomButton}>
              <img src="https://img.icons8.com/material-outlined/24/ffffff/plus-math--v1.png" />
              <div className={styles.buttonText}>Start a room</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms