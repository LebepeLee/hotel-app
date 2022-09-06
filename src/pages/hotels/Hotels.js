import React,{useState} from 'react'
import './Hotels.css'
import { Link } from 'react-router-dom';
import Login from '../../components/Login/Login'
import {useNavigate} from 'react-router-dom'
import { auth } from '../../FirebaseConfig/Firebase';
import { useEffect } from 'react';

export default function Hotels({hotels}) {
console.log(hotels)
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [hotel, setHotel] = useState('')
var user = auth.currentUser;
// console.log(user.uid);

useEffect(()=>{
      if(user != null){
            setIsLoggedIn(true)
      }else{
            setIsLoggedIn(false)
      }
},[user])
   
      const checkRoom = (id)=>{
            if (!isLoggedIn){
                 navigate(`/Login`)
                  alert('please login first')
            }else{
                 
                  navigate(`/hotel/${id}`)
            }
      }
  return (
    <div className='container'>
        <h2>Hotels guests love</h2>
        <div className='parent'>
            

            {
                  hotels.map((hotel,index)=>(
                      
                        <div className='hotels' key={index}>
                     
                      
                        <img className='picture' src={hotel.image} alt="imag" />
                        <span className='hotelName'>{hotel.name}</span><br></br>
                        <span className='city'>{hotel.city}</span><br></br>
                        <span className='price'>R{hotel.price}</span><br></br>
                        <span className='price'>Rating {hotel.rating}</span><br></br>
                        {/* <Link to = {`/hotel/${hotel.id}`}>  */}
                        <button className="siCheckButton" onClick={()=>checkRoom(hotel.id)}>See availability</button>
                        
                        {/* </Link> */}
                        
                  </div>
                

                  ))
            }

                   

            
                </div>
        </div>
  )
}
