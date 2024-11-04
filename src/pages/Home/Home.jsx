import React from 'react'
import './Home.css'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import Navbar from '../../components/Navbar/Navbar'
import { TitleCards } from '../../components/TitleCards/TitleCards'
import  Footer  from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div  className='home'>
       <Navbar/>
       <div className="hero relative ">
        <img src={heroBanner} alt="" className='banner-img w-full  '/>
        <div className="hero-caption absolute w-full ">
          <img src={heroTitle} alt=""  className='caption-img '/>
          <p className='hero-caption-p'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns flex gap-[10px] mb-[50px]">
            <button className='btn'><img src={playIcon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>

          </div>
          <TitleCards/>
        </div>
       </div>
       <div className="more-cards ">
       <TitleCards title={"Blockbuster Movies"} category={"popular"} pageNum ={2} />
       <TitleCards title={"Upcoming"} category={"upcoming"}  pageNum ={3}/>
       <TitleCards title={"Only on Netflix"} category={"popular"} pageNum ={4}/>
       <TitleCards title={"Top pics for you"} category={"top_rated"} pageNum ={3}/>
       </div>

       <Footer/>
    </div>
  )
}


export default Home