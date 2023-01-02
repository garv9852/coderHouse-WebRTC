import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Input from '../../../components/shared/Input/Input'
import Button from '../../../components/shared/Button/Button'
import styles from "./StepName.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setNam } from '../../../redux/activationSlice'
import { useState } from 'react'
function StepName({ onNext }) {
  let [fname, setFName] = useState("");
  let dispatch = useDispatch();
  let submit = () => {
    dispatch(setNam(fname));
    onNext();
  }
  return (
    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
        <div className={styles.cardWrapper}>
        <div style={{ "padding": "1rem" }}>
          <Card title="Enter your name" icon="face">
            <Input value={fname} onChange={(e) => setFName(e.target.value)} style={{ width: "18rem", fontSize: "23px" }} />
            <Button onClick={submit} text="Next" />
            <p style={{ color: "#C4C5C5", width: "70%", margin: "0 auto", marginTop: "1.5rem" }}>
              People use real name at coderhouse :)
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default StepName