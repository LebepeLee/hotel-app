import React, { useState} from 'react'
import Footer from '../../components/footer/Footer'
import Mailbox from '../../components/mailbox/Mailbox'
import './Hotel.css'
import { useParams } from 'react-router';
import {addDoc, collection, getDocs} from 'firebase/firestore';
import {auth, db} from '../../FirebaseConfig/Firebase'

function Hotel({hotelList}) {
 
  const [hotel,setHotel] = useState('')
  const hotelsCollectionRef = collection(db,'hotel')
   const {id} = useParams()
   console.log(id)
  console.log(hotelList)
 
  // let hotelName 
  hotelList.filter((item=>item.id===id)).map((hotelL)=>{
    console.log(hotelL.name)
    // hotelName = hotelL.name
    console.log(hotelL)
  })
   

      function hotelInfo(){

        // const collectionRef = collection(db, 'hotelData');
        // hotelDetails.map(hotel=>{
        //   return addDoc(collectionRef,hotel).then((snapshot)=>{
        //     alert('Your booking is successful')
        //     console.log(snapshot.docs);
        //   })
        //   .catch((error)=>{
        //     alert('Your booking was not made, sorry'+error.message)
        //   })
        // })
        
      }
      var user = auth.currentUser;
      const getHotel = async ()=>{

        const data = await getDocs(hotelsCollectionRef)
        setHotel(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        console.log(data)
      }

      const hotelCollectionRef = collection(db,'BookedHotel')
      
      const bookHotel = async(newHotel,city,price,rating)=>{
      await addDoc(hotelCollectionRef,{name: newHotel,userId: user.uid, city: city, price: price, rating: rating})
      .then(()=>{
        alert('Hotel booked successfully')
      })
      .catch((error)=>{
        alert('The hotel was not booked,sorry'+error)
      })
    }

  return (
    <>
    <div className='hotelContainer'>
    
 
      <div className='hotelWrapper'>
       <div className='hotelDetails'>
            {
               hotelList.filter((item=>item.id===id)).map((res)=>(
                <>
                <img src={res.image} alt='hotel pic'/><br></br>
                <span>{res.name} Hotel</span>
                <span>{res.city} City</span>
                <span>R {res.price}</span>
                <span>{res.rating} Star</span>
                <button className='bookNow' onClick={()=>bookHotel(res.name, res.city, res.price, res.rating)}>Book Now</button>
                </>
               )
              
              )
            }
            
            </div>
      </div>
      
      </div>

<Mailbox />
<Footer /> 

</>
  )}
export default Hotel