import React from 'react'
import './Mailbox.css'

function Mailbox() {
  return (
    <div className='mail'>
        <div className='mailtitle'>Subscribe for updates and promotions</div>
        <div className='mailInput'>
            <input type='email' placeholder='Enter your E-mail'/>
            <button className='mailBtn'>Subscribe</button>
        </div>
    </div>
  )
}

export default Mailbox