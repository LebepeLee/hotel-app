import React from 'react'
import './Hotels.css'
import {FaStar} from 'react-icons/fa'
import pic from '../../hotelimages/fire&ice.webp';
import hotel1 from '../../hotelimages/hotel1.jpg';
import hotel2 from '../../hotelimages/hotel2.jpg';
import hotel3 from '../../hotelimages/hotel3.jpg';
import hotel4 from '../../hotelimages/hotel4.jpg';

export default function Hotels() {
   
  return (
    <div className='container'>
        <h2>Hotels guests love</h2>
        <div className='parent'>
                <div className='hotels'>
                  
                    <img className='picture' src={pic} alt="imag"/>
                    <span className='hotelName'>Fire and Ice</span><br></br>
                    <span className='city'>Pretoria</span><br></br>
                    <span className='price'>R950</span><br></br>
                    <FaStar/>
                </div>

                <div className='hotels'>
               <img className='picture' src={hotel1} alt="imag"/>
                    <span className='hotelName'>Menlyn hotel</span><br></br>
                    <span className='city'>Polwane</span><br></br>
                    <span className='price'>R450</span><br></br>
                    <FaStar/>
                </div>
                <div className='hotels'>
                <img className='picture' src={hotel2} alt="imag"/>
                    <span className='hotelName'>City Lodge Hotel</span><br></br>
                    <span className='city'>Johannesburg</span><br></br>
                    <span className='price'>R750</span><br></br>
                    <FaStar/>
                </div>
                <div className='hotels'>
                <img className='picture' src={hotel3} alt="imag"/>
                    <span className='hotelName'>Manhanttan</span><br></br>
                    <span className='city'>Cape town</span><br></br>
                    <span className='price'>R900</span><br></br>
                    <FaStar/>
                </div>
                <div className='hotels'>
                <img className='picture' src={hotel4} alt="imag"/>
                    <span className='hotelName'>Hotel 224</span><br></br>
                    <span className='city'>Durban</span><br></br>
                    <span className='price'>R800</span><br></br>
                    <FaStar/>
                </div>
                </div>
        </div>
  )
}
