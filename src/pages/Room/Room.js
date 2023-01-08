import React from 'react'
import { useWebRtc } from '../../hooks/useWebRtc'
import styles from "./Room.module.css"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
function Room() {
    const { id: roomId } = useParams();
    const user = useSelector((state) => state.auth.user)
    const { clients, provideRef } = useWebRtc(roomId,user);
    return (
        <div style={{ borderTop: "1px solid rgb(80, 80, 80)" }}>
            <div style={{ margin: "auto", maxWidth: "80rem", padding: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#fff" d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7Z" /></svg>
                    <div style={{ marginLeft: "1rem", borderBottom: "1px solid #0077FF" }}>All voice channels</div>
                </div>
            </div>
            <div style={{ padding: "1rem", width: "100%", borderRadius: "1rem", background: "rgb(26 27 27)" }}>
                <div style={{ margin: "auto", maxWidth: "95%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>Artificial inteligence is the future</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ padding: "0.5rem", borderRadius: "0.7rem", background: "rgba(38, 38, 38, 1)" }} src={"/images/stop.png"} alt={"stop-img"} />
                            <div style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", background: "rgba(38, 38, 38, 1)" }}>
                                <img src={"/images/victory.png"} alt={"victory-img"} />
                                <div style={{ width: "max-content", marginLeft: "0.5rem" }}>Leave quietly</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridRoom}>
                        {
                            clients.map((e) => (
                                <div key={e.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <audio ref={(instance)=>provideRef(instance,e.id)} autoPlay controls/>
                                    <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                    <div style={{}}>{e.name.slice(0,5)}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <div>Other in the Room</div>
                        <div className={styles.gridRoom}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img style={{ borderRadius: "2rem", height: "4rem" }} src={"/images/avatar.png"} alt={"avatar-img"} />
                                <div style={{}}>Garv</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "fixed", top: "84%", left: "47%", transform: "translate(-50%,-50%)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#121212", padding: "0.8rem", borderRadius: "1rem", margin: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: "max-content", padding: "0.3rem 0.6rem", borderRadius: "2rem", background: "rgba(34, 34, 34, 1)" }}>
                        <img src={"/images/micOff.png"} alt={"micOff-img"} style={{ height: "1.5rem", marginTop: "0.3rem" }} />
                    </div>
                    <div style={{ marginLeft: "0.5rem", background: "rgba(34, 34, 34, 1)", padding: "0.5rem", borderRadius: "1rem" }}>
                        <select style={{ border: 0, outline: 0, background: "rgba(34, 34, 34, 1)", color: "white" }}>
                            <option>Shuru S7MB Microphone</option>
                        </select>
                    </div>
                </div>
                <div style={{ width: "max-content", fontSize: "small", color: "red", marginLeft: "0.5rem" }}>The End</div>
            </div>
        </div>
    )
}

export default Room