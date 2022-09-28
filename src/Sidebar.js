import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css';
import { HiHome } from 'react-icons/hi';
import { GoFlame } from 'react-icons/go';
import { MdSubscriptions } from 'react-icons/md';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';

function Sidebar() {
  return (
    <div className='sidebar' >

        <SidebarRow selected Icon={HiHome} title='Home' />
        <SidebarRow Icon={GoFlame} title='Trending' />
        <SidebarRow Icon={MdSubscriptions} title='Subscription' />
        <hr/>
        <SidebarRow Icon={MdOutlineVideoLibrary} title='Library' />
        <SidebarRow Icon={MdHistory} title='History' />
        <SidebarRow Icon={AiOutlinePlaySquare} title='Your videos' />
        <SidebarRow Icon={MdOutlineWatchLater} title='Watch Later' />
        <SidebarRow Icon={AiOutlineLike} title='Liked videos' />
        <SidebarRow Icon={AiOutlineDown} title='Show more' />
        <hr />
    </div>
  )
}

export default Sidebar