import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import styles from "./StepAvatar.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { setAvatar,setNam } from '../../../redux/activationSlice'
import { activate } from '../../../http'
import { setAuth } from '../../../redux/authSlice'
import Loader from '../../../components/shared/Loader/Loader'
function StepAvatar({ onNext }) {
  let { name, avatar } = useSelector((state) => state.activation);
  const [profilePicture, setProfilePicture] = useState("/images/avatar.png")
  const [loading,setLoading]=useState(false);
  const dispatch = useDispatch();
  let submit = async () => {
    setLoading(true);
    try {
      const { data } = await activate({ name, avatar });
      dispatch(setNam(data.user.name));
      dispatch(setAvatar(data.user.avatar))
      dispatch(setAuth(data));
    }
    catch (e) {
      console.log(e);
    }
    finally{
      const timer = setTimeout(() => setLoading(false), 2000);
      clearTimeout(timer);
    }
  }
  let handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        dispatch(setAvatar(reader.result));
      }
    }
  }
  if(loading) return(<Loader text={"Activation in Progress"}/>)
  return (
    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
        <div className={styles.cardWrapper}>
        <div style={{ "padding": "1rem" }}>
          <Card title={`Okay, ${name}`} icon="monkey">
            <input type="file" onChange={(e) => handleImage(e)} accept="image/*" id="photoChange" hidden />
            <label htmlFor="photoChange">
              <div className={styles.iconUpload} htmlFor="photoChange">
                <img src={profilePicture} alt="avatar" />
              </div>
            </label>
            <Button onClick={submit} text="Next" style={{ marginTop: "2rem" }} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default StepAvatar