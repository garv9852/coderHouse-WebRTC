import React from 'react'
import styles from "./Home.module.css"
import Card from '../../components/shared/Card/Card'
import {Link,useNavigate} from "react-router-dom"
import Button from '../../components/shared/Button/Button'
function Home() {
  const signInLink={
    color:"#0077FF",
    fontWeight:"bold",
    textDecoration:"none",
    marginLeft:"10px"
  }
  const history=useNavigate();
  let startRegister=()=>{
    history("./authenticate")
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse" icon="hand">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! 
          While we wrap up the finishing youches, we’re adding people 
          gradually to make sure nothing breaks :)
        </p>
        <div>
          <Button text="Lets Go" onClick={startRegister}/>
        </div>
        <div className={styles.signinWrapper}>
          <span>Have an invite text?</span>
        </div>
      </Card>
    </div>
  )
}

export default Home