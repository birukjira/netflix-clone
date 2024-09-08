import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/images/netflix-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import profile from '../../assets/images/profile_img.png'
import search from '../../assets/images/search_icon.svg'
import bell from '../../assets/images/bell_icon.svg'


function Header() {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', null)
    }
  },[])
  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__container">
        <div className="header__left">
          <ul className='header__nav'>
            <li><img src={logo} alt="netflix-logo" /></li>
            <li className='header__active'>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header__right">
          <ul className='header__nav'>
            {/* <li><SearchIcon /></li> */}
            <li> <img src={search} alt="search" /> </li>
            <li><p>kids</p></li>
            <li><NotificationsNoneIcon /></li>
            {/* <li> <img style={{
              width: '20px'
            }} src={bell} alt="bell" /> </li> */}
            <li>
              <img className='header__profile' src={profile} alt="profile img" />
              <ArrowDropDownIcon />
            </li>
            
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
