import React,{useState} from 'react'
import './Mailbox.css'
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../FirebaseConfig/Firebase'

function Mailbox() {

  const [email, setEmail] = useState('')

  const hotelCollectionRef = collection(db,'Promotions')
  const Subscribe = async()=>{
await addDoc(hotelCollectionRef,{email})
.then(()=>{
  alert('You have successfully subscribed to our promotions')
})
.catch((error)=>{
  alert('Failed to send the email ,sorry'+error)
})
}
  return (
    <div className='mail'>
        <div className='mailtitle'>Subscribe for updates and promotions</div>
        <div className='mailInput'>
            <input type='email' placeholder='Enter your E-mail' onChange={((e)=>setEmail(e.target.value))}/>
            <button className='mailBtn' onClick={Subscribe}>Subscribe</button>
        </div>
    </div>
  )
}

export default Mailbox