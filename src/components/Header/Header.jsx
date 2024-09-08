import React from 'react'
import './Header.css'
import logo from '../../assets/images/netflix-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='header'>
      <div className="header__container">
        <div className="header__left">
          <ul className='header__nav'>
            <li><img src={logo} alt="netflix-logo" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyLis</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header__right">
          <ul className='header__nav'>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
