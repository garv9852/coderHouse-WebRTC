import React, { useState } from 'react'
import styles from "./RoomCard.module.css"
import { useNavigate } from 'react-router-dom';
export default function RoomCard({ data }) {
    const navigate = useNavigate();
    return (
        <div className={styles.card} onClick={() => navigate(`/room/${data.id}`)}>
            <div>{data.topic}</div>
            {
                data.speakers.length == 1 ?
                    <div style={{ display: "flex", alignItems: "center",marginLeft:'0.3rem' }}>
                        <div style={{ display: "flex", marginTop: "1rem" }}>
                            <img style={{ height: "2.2rem", objectFit: "contain", borderRadius: "2rem" }} src={data.speakers[0].avatar} alt={"avatar-img"} />
                            <div style={{ fontSize: "small", marginLeft: "1rem",marginTop:"0.3rem" }}>{data.speakers[0].name}<img src={"/images/messageBox.png"} alt="meBox"/></div>
                        </div>
                    </div>
                    :
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <img style={{ height: "2.2rem", objectFit: "contain", borderRadius: "2rem" }} src={data.speakers[0].avatar} alt={"avatar-img"} />
                            <img style={{ position: "absolute", height: "2.2rem", objectFit: "contain", borderRadius: "2rem", top: "60%", left: "30%" }} src={data.speakers[1].avatar} alt={"avatar-img"} />
                        </div>
                        <div style={{ display: "inline-block", fontSize: "small", marginLeft: "2rem", marginTop: "1rem" }}>
                            <div>{data.speakers[0].name}<img src={"/images/messageBox.png"} alt="meBox"/></div>
                            <div>{data.speakers[1].avatar}<img src={"/images/messageBox.png"} alt="meBox"/></div>
                        </div>
                    </div>
            }
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", position: "absolute", bottom: "7px", right: "10px" }}>
                <div style={{ fontSize: "smaller" }}>8</div>
                <svg style={{ marginLeft: "0.2rem" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="#C4C5C5" d="M6.642 6.623a2.985 2.985 0 1 0 0-5.97 2.985 2.985 0 1 0 0 5.97Zm0 1.493c-1.993 0-5.971 1-5.971 2.986v1.492h11.942v-1.492c0-1.986-3.978-2.986-5.971-2.986Z" /></svg>
            </div>
        </div>
    )
}