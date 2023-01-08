import {useRef, useEffect, useCallback } from "react"
import { useStateWithCallBack } from "./useStateWithCallBack";
import {socketInit} from "../socket/index";
import {ACTIONS} from "../actions";
export const useWebRtc = (roomId,user) => {
    const [clients, setClients] = useStateWithCallBack([]);
    const audioElements = useRef({});
    const connections = useRef({});
    const localMediaStream = useRef(null);
    const socketRef=useRef(null)
    useEffect(()=>{
        socketRef.current=socketInit();
    },[])
    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance;
    }
    const addNewClients = useCallback((newClient, cb) => {
        const lookingFor = clients.find((client) => client.id === newClient.id)
        if (lookingFor === undefined) {
            setClients((existingClients) => [...existingClients, newClient], cb);
        }
    }, [clients, setClients])
    useEffect(() => {
        const startCapture = async () => {
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio: true
            })
        }
        startCapture().then(() => {
            addNewClients(user,()=>{
                const localElement=audioElements.current[user.id];
                if(localElement)
                {
                    localElement.volume=0;
                    localElement.srcObject=localMediaStream.current
                }
                socketRef.current.emit(ACTIONS.JOIN,{roomId,user});
            })
        })
    }, [])
    return { clients, provideRef };
}