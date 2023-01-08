import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../http'
import styles from './Navigation.module.css'
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/authSlice';
import { useSelector } from 'react-redux';
function Navigation() {
  const dispatch = useDispatch()
  const brandstyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: "bold",
    fontSize: '17px',
    display: "flex",
    alignItems: 'center'
  }
  const logoText = {
    marginLeft: "0.3rem"
  }
  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    }
    catch (err) {
      console.log(err);
    }
  }
  const { user, isAuth } = useSelector((state) => state.auth)
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandstyle} to="/">
        <img src='/images/hand.png' style={{ height: "1.5rem" }} alt="logo-img" />
        <span style={logoText}>CodersHouse</span>
      </Link>
      {
        isAuth && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.profileName}>
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </div>
            <div style={{ marginRight: "1rem", marginTop: "0.5rem" }}>
                <img className={styles.profileImg} src={user.avatar} alt='avatar-img' />
            </div>
            <div>
              <button className={styles.logoutBtn} onClick={logoutUser}>
                <img className={styles.logoutImg} src='/images/arrow.png' alt='arrow-img' />
              </button>
            </div>
          </div>
        )
      }
    </nav>
  )
}



export default Navigation