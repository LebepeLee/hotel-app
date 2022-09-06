import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import './ForgotPassword.css'

function ForgotPassword() {

  const [email,setEmail] = useState('')

  const onSubmit = async (e) =>{
    e.preventDefault()
    try {
      
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      console.log(email)
      alert('email sent')
    } catch (error) {
      alert('failed to send email')
    }
  }
    
  return (
    <div className='container'>
      <div className='main'>
          <form onSubmit={onSubmit}> 
              <h1>Forgot Password</h1>
              <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/><br></br>
                  <Link to ='/Login'>
                <button className='btn' onClick={onSubmit}>Forgot Password</button>
               </Link>
        </form>
      
      </div>
    </div>
    
  )
}

export default ForgotPassword