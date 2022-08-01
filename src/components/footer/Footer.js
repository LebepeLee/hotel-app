import React from 'react'
import {FaTwitter,FaLinkedin,FaFacebook} from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerItems'>
    <span className='footer'><i>copyright@2022</i></span>
    <FaFacebook/>
    <FaTwitter/>
    <FaLinkedin/>
    </div>
  )
}
