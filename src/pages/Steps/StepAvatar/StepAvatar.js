import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import styles from "./StepAvatar.module.css"
import { useSelector,useDispatch } from 'react-redux'
import { setAvatar } from '../../../redux/activationSlice'
import { activate } from '../../../http'
function StepAvatar({onNext}) {
  let {name,avatar}=useSelector((state)=>state.activation);
  const [profilePicture,setProfilePicture]=useState("/images/avatar.png")
  const dispatch=useDispatch();
  let submit=async ()=>{
    try{
      const {data}= await activate({name,avatar});
      console.log(data);
    }
    catch(e)
    {
      console.log(e);
    }
  }
  let handleImage=(e)=>{
    if(e.target.files && e.target.files[0])
    {
      const reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend=()=>{
        setProfilePicture(reader.result);
        dispatch(setAvatar(reader.result));
      }
    }
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={`Okay, ${name}`} icon="monkey">
          <input type="file" onChange={(e)=>handleImage(e)} accept="image/*" id="photoChange" hidden/>
          <label htmlFor="photoChange">
            <div className={styles.iconUpload} htmlFor="photoChange">
              <img src={profilePicture} alt="avatar"/>
            </div>
          </label>
          <Button onClick={submit} text="Next" style={{marginTop:"2rem"}}/>
        </Card>
      </div>
    </>
  )
}

export default StepAvatar