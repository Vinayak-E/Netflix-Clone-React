import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'


 const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-icons">
      <img src={facebookIcon} alt="" />
      <img src={instagramIcon} alt="" />
      <img src={twitterIcon} alt="" />
      <img src={youtubeIcon} alt="" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>


    </ul>
    <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>

    </div>
  )
}
export default Footer