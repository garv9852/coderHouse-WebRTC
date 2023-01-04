import React from 'react'
import styles from "./RoomCard.module.css"
export default function RoomCard() {
    return (
        <div className={styles.card}>
            <div>Which framework best for frontend</div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div style={{position:"relative",marginTop:"0.5rem"}}>
                    <img style={{height:'2rem',borderRadius:"2rem"}} alt="img" src={"http://localhost:5500/storage/1672694691336-119184929.png"}/>
                    <img style={{height:'2rem',borderRadius:"2rem",position:"relative",left:"-15px",top:"20px"}} alt="img" src={"http://localhost:5500/storage/1672694691336-119184929.png"}/>
                </div>
                <div style={{ fontSize: "small",marginTop:"1rem",marginRight:"1rem"}}>
                    <div>Garv Kapoor <img src={`/images/messageBox.png`} alt="box"/></div>
                    <div>Ishaan Kapoor <img src={`/images/messageBox.png`} alt="box"/></div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center",position: "absolute",bottom: "7px",right: "10px"}}>
                <div style={{ fontSize: "smaller" }}>8</div>
                <svg style={{ marginLeft: "0.2rem" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="#C4C5C5" d="M6.642 6.623a2.985 2.985 0 1 0 0-5.97 2.985 2.985 0 1 0 0 5.97Zm0 1.493c-1.993 0-5.971 1-5.971 2.986v1.492h11.942v-1.492c0-1.986-3.978-2.986-5.971-2.986Z" /></svg>
            </div>
        </div >
    )
}