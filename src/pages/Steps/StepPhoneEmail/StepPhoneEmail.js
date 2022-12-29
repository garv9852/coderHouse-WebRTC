import React, { useState } from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from "./StepPhoneEmail.module.css"
const types={
  1:Phone,
  2:Email,
}
function StepPhoneEmail({onNext}) {
  const [type,setType]=useState(1);
  const Type=types[type];
  // console.log(onNext);
  return (
    <div style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
      <div className={styles.cardWrapper}>
        <div style={{"padding":"1rem"}}>
          <div className={styles.buttonWrapper}>
            <button onClick={()=>{setType(1)}} className={`${styles.button} ${type==1?styles.active:''}`}>
              <img src="images/phone.png"/>  
            </button>
            <button onClick={()=>{setType(2)}} className={`${styles.button} ${type==2?styles.active:''}`}>
              <img src="images/message.png"/>    
            </button>
          </div>
          <Type onNext={onNext}></Type>
        </div>
      </div>   
    </div>
  )
}

export default StepPhoneEmail