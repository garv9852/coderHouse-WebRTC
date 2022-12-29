import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Input from '../../../components/shared/Input/Input'
import Button from '../../../components/shared/Button/Button';
import styles from "./StepOtp.module.css"
import { verifyOtp } from "../../../http/index"
import { useSelector } from "react-redux"
import { setAuth } from "../../../redux/authSlice"
import { useDispatch } from "react-redux"
function StepOtp({ onNext }) {
  const [otp, setOtp] = useState("");
  const { phone, hash } = useSelector((state) => state.auth.otp)
  const dispatch = useDispatch();
  let submit = async () => {
    try {
      let { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data));
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
        <div className={styles.cardWrapper}>
        <div style={{ "padding": "1rem" }}>
          <Card title="Enter the code we just texted you" icon="lock">
            <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Button onClick={submit} text="Next" />
            <p style={{ color: "#C4C5C5", width: "70%", margin: "0 auto", marginTop: "1.5rem" }}>
              By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default StepOtp