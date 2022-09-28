import React from 'react'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { BiVideoPlus } from 'react-icons/bi'
import { GrApps } from 'react-icons/gr'
import { IoMdNotificationsOutline } from 'react-icons/io'


function Header() {
  return (
    <div className='header'> 
        <div className='header__left'>
            <GiHamburgerMenu className='header__menu' />
            <img className='header__logo' src='https://imgs.search.brave.com/i5bT5cGiKtqU6SXdVyU1U3Kqd_I7TA8ydjM4FXQ_LWk/rs:fit:854:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/WkV2RlhUUVgyQlEx/eFppdkNZSGVRSGFF/SCZwaWQ9QXBp' alt='youtube logo' />
        </div>
        
        <div className='header__input'>
            <input placeholder='Search' type="text"/>
            <BsSearch className='header__inputButton' />
        </div>
        
        <div className='header__icons'>
            <BiVideoPlus className='header__icon' />
            <GrApps className='header__icon' />
            <IoMdNotificationsOutline className='header__icon' />
            <img className='header__avatar' src='https://imgs.search.brave.com/r3VlnygwEMMQNmH-7z-w4kINh-GFYTWNRT1ePLTTk3s/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/TUlvQTFEZ1U2SkRx/NmJ5cl9xbjVnSGFI/YSZwaWQ9QXBp' alt='avatar' />
        </div>

    </div>
  )
}

export default Header