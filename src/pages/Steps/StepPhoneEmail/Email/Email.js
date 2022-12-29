import React,{useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import Input from "../../../../components/shared/Input/Input"

function Email({onNext}) {
  const [email,setEmail]=useState("")
  return (
    <>
      <Card title="Enter your Email Id" icon="email">
        <Input style={{maxWidth:"18rem",fontSize:"18px"}} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Button text="Next" onClick={onNext}/>
        <p style={{color:"#C4C5C5",width:"70%",margin:"0 auto",marginTop:"1.5rem"}}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
        </p>   
      </Card>
    </>
  )
}

export default Email