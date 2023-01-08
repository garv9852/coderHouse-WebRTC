import React, { useEffect, useState } from 'react'
import styles from "./Rooms.module.css"
import RoomCard from "../../components/shared/RoomCard/RoomCard"
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel'
import { getAllRooms } from '../../http'
function Rooms() {
  const [showModel,setShowModel]=useState(false);
  const [rooms,setRooms]=useState([]);
  useEffect(()=>{
    const fetchRooms=async()=>{
      const {data}=await getAllRooms();
      setRooms(data);
    }
    fetchRooms();
  },[])
  const onSetModel=()=>{
    setShowModel(!showModel);
  }
  return (
    <div className={styles.roomsContainer}>
      <div className={styles.roomsBox}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.textRoom}>All voice rooms</div>
              <div style={{ display: "flex", alignItems: "center", padding: "0.5rem", background: "#262626", borderRadius: "1rem", marginLeft: "0.5rem" }}>
                <svg style={{ marginRight: "0.5rem" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#C4C5C5" d="M12.5 11h-.79l-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5Zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11Z" /></svg>
                <input className={styles.searchBar} />
              </div>
            </div>
          </div>
          <div style={{ marginRight: "0.5rem" }}>
            <div className={styles.btn} onClick={onSetModel}>
              <img src="https://img.icons8.com/material-outlined/24/ffffff/plus-math--v1.png" alt={"roomCreate-logo"} />
              <div className={styles.buttonText}>Start a room</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2rem"}}>
          <div className={styles.gridRooms}>
            {
              rooms.map((roomData)=>(
                <RoomCard key={roomData.id} data={roomData}/>
              ))
            }
          </div>
        </div>
      </div>
      {showModel && <AddRoomModel onClose={onSetModel}/>}
    </div>
  )
}

export default Rooms