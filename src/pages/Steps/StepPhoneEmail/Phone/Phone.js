import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import Input from "../../../../components/shared/Input/Input"
import {sendOtp} from "../../../../http/index"
import {useDispatch} from 'react-redux'
import {setOtp} from "../../../../redux/authSlice"
function Phone({onNext}) {
  const [phoneNumber,setPhoneNumber]=useState("");
  const dispatch=useDispatch();
  let Submit=async()=>{
    const {data}=await sendOtp({phone:`+91${phoneNumber}`});
    console.log(data);
    dispatch(setOtp({phone:data.phone,hash:data.hash}))
    onNext();
  }
  return (
    <>
      <Card title="Enter your Mobile Number" icon="telephone">
        <Input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
          <Button text="Next" onClick={Submit}/>
          <p style={{color:"#C4C5C5",width:"70%",margin:"0 auto",marginTop:"1.5rem"}}>
            By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
          </p>    
      </Card>
    </>
  )
}

export default Phone