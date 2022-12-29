import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Input from '../../../components/shared/Input/Input'
import Button from '../../../components/shared/Button/Button'
import styles from "./StepName.module.css"
import { useDispatch,useSelector } from 'react-redux'
import { setNam } from '../../../redux/activationSlice'
import { useState } from 'react'
function StepName({onNext}) {
  const {name}=useSelector((state)=>state.activation);
  let [fname,setFName]=useState(name);
  let dispatch=useDispatch();
  let submit=()=>{
    dispatch(setNam(fname));
    onNext();
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter your name" icon="face">
          <Input value={fname} onChange={(e)=>setFName(e.target.value)} style={{width:"18rem",fontSize:"23px"}}/>
          <Button onClick={submit} text="Next"/>
          <p style={{color:"#C4C5C5",width:"50%",margin:"0 auto",marginTop:"1.5rem"}}>
            People use real name at coderhouse :)
          </p>
        </Card>
      </div>
    </>
  )
}

export default StepName