import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import  searchIcon from '../../assets/search_icon.svg'
import  bellIcon from '../../assets/bell_icon.svg'
import  profileImg from '../../assets/profile_img.png'
import  caretIcon from '../../assets/caret_icon.svg'
import {logout} from '../../firebase'
export const Navbar = () => {

   const navRef = useRef()
   useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
   },[])

  return (
    <div  ref={navRef} className='navbar flex  w-full py-5 px-[6%] justify-between fixed text-sm text-[#e5e5e5] z-[1]'>
      <div className='navbar-left flex items-center gap-[50px]'>
        <img src= {logo} alt="" />
        <ul >
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>

      </div>
      <div className="navbar-right flex gap-5 items-center">
        <img src={searchIcon} alt="" className='icons' />
        <p>Children</p>
        <img src={bellIcon} alt="" className='icons' />
        <div className="navbar-profile flex items-center gap-[10px] cursor-pointer relative">
        <img src={profileImg} alt="" className='profile'/>
        <img src={caretIcon} alt="" className='icons' />
        <div className="dropdown absolute w-max z-[1]">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar