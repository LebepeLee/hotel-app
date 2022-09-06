import React from 'react'
import { Outlet } from 'react-router'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Mailbox from './components/mailbox/Mailbox'
// import {BrowserRouter as Router,Routes, Route,Outlet} from 'react-router-dom'
// import Details from './pages/Detailed/Details'
// import Hotel from './pages/home/Hotel'
// import Hotels from './pages/hotels/Hotels'

// import pic from './hotelimages/fire&ice.webp';
// import hotel1 from './hotelimages/hotel1.jpg';
// import hotel2 from './hotelimages/hotel2.jpg';
// import hotel3 from './hotelimages/hotel3.jpg';
// import hotel4 from './hotelimages/hotel4.jpg';
// import SignUp from './components/SignIn/SignUp'



export default function Navigation() {

 
  
  return (
    <div>
      <Banner />
    <Outlet />
    <Mailbox />
    <Footer />
    </div>
  )
}
