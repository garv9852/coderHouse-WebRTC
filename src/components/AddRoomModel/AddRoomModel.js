import React, { useState } from 'react'
import styles from "./AddRoomModel.module.css"
import { creatRoom as create } from '../../http';
import { useNavigate } from 'react-router-dom';
function AddRoomModel({onClose}) {
    const [roomType,setRoomType]=useState("open");
    const [topic,setTopic]=useState("");
    const navigate=useNavigate();
    const creatRoom=async()=>{
        if(!topic) return;
        try{
            const {data}=await create({
                topic,
                roomType
            });
            navigate(`/room/${data.id}`)
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div style={{ position: "fixed", top: "0", width: "100%", height: "100%", background: "rgb(0 0 0 / 80%)" }}>
            <div style={{ maxWidth: "30rem", margin: "auto", marginTop: "10rem", marginBottom: "10rem" }}>
                <div style={{ padding: "1rem", margin: "0.5rem", background: "#1D1D1D", borderRadius: "1rem" }}>
                    <div style={{textAlign:"end"}} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#C4C5C5" d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" /></svg>
                    </div>
                    <div>Enter the topic to be disscussed</div>
                    <input style={{
                        background: "#262626",
                        border: "0",
                        outline: "0",
                        color: "white", marginTop: "0.5rem",
                        padding: "0.3rem",
                        borderRadius: "0.5rem",
                        width: "100%",
                        paddingTop:"0.6rem",
                        paddingBottom:"0.6rem"
                    }} value={topic} onChange={(e)=>setTopic(e.target.value)}/>
                    <div style={{ marginTop: "1rem" }}>Room type</div>
                    <div style={{paddingTop: "1rem", paddingBottom: "1rem", borderBottom: "solid 1px #2e2e2e", display: "flex", justifyContent: "space-between"}}>
                        <div onClick={()=>setRoomType("open")} style={{ background:roomType==="open" && "rgba(38, 38, 38, 1)"}} className={styles.box}>
                            <img src={"/images/globe.png"} style={{ height: "3.5rem" }} alt="globe-img" />
                            <div style={{ textAlign: "center" }}>Open</div>
                        </div>
                        <div onClick={()=>setRoomType("social")} style={{ background:roomType==="social" && "rgba(38, 38, 38, 1)"}} className={styles.box}>
                            <img src={"/images/users.png"} style={{ height: "3.5rem" }} alt="users-img" />
                            <div style={{ textAlign: "center" }}>Social</div>
                        </div>
                        <div onClick={()=>setRoomType("closed")} style={{ background:roomType==="closed" && "rgba(38, 38, 38, 1)"}} className={styles.box}>
                            <img src={"/images/lockk.png"} style={{ height: "3.5rem" }} alt="lockk-img" />
                            <div style={{ textAlign: "center" }}>Closed</div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>Start a room open to Everyone</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div onClick={creatRoom} style={{ cursor:"pointer",display: "inline-block", borderRadius: "1rem", marginTop: "1rem", textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", backgroundColor: "rgba(32, 189, 95, 1)" }}>
                            Let's Go
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModel