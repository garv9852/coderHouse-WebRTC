import React from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../../../http'
import styles from './Navigation.module.css'
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/authSlice';
function Navigation() {
  const dispatch=useDispatch()
  const brandstyle={
    color:'#fff',
    textDecoration:'none',
    fontWeight:"bold",
    fontSize:'22px',
    display:"flex",
    alignItems:'center'
  }
  const logoText={
    marginLeft:"10px"
  }
  const logoutUser=async ()=>{
    try{
      const {data}=await logout();
      dispatch(setAuth(data));
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandstyle}to="/">
        <img src='./images/hand.png' alt="logo-img"/>
        <span style={logoText}>CodersHouse</span>
      </Link>
      <button onClick={logoutUser} >Log out</button>
    </nav>
  )
}



export default Navigation