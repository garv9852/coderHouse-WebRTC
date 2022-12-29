import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
function Navigation() {
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
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandstyle}to="/">
        <img src='./images/hand.png' alt="logo-img"/>
        <span style={logoText}>CodersHouse</span>
      </Link>
    </nav>
  )
}



export default Navigation