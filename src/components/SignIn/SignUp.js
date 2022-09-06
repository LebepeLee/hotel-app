import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import{createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../FirebaseConfig/Firebase'
import {db} from '../../FirebaseConfig/Firebase'
import {collection, addDoc} from 'firebase/firestore'
import './SignUp.css'


function SignUp() {

  const [user,setUser] = useState({
    name: '',
    surname: '',
    mobileNumber: 0,
    email: '',
    password: '',
    cPassword: '',
  })
  const [error,setError] = useState(false)

  let history = useNavigate()

  function userInput(e){
    setUser ({...user, [e.target.name]:e.target.value})
    console.log(user);
  
  }
  

  const register = () =>{
    
    createUserWithEmailAndPassword(auth, user.email, user.password).then((results)=>{
      const collectionRef = collection(db, 'userInfo');
    addDoc(collectionRef,{...user,id: results.user.uid}).then((snapshot)=>{
      alert('Your information is successfully saved')
      console.log(snapshot.docs);
      history('/Login')
    })
    .catch((error)=>{
      alert('failed to save your details, sorry'+error.message)
    })
      
    }).catch((error)=>{
      console.log(error)
    }) 
  }

   const handleSubmit = (e) =>{
    e.preventDefault ()
    
    if (user.name ===''){
      setError(true)
      console.log(user.name)
    }
    if (user.surname===''){
      setError(true)
      console.log(user.surname)
    }
    if (user.mobileNumber===''){
      setError(true)
      console.log(user.mobileNumber)
    }
    if (user.email===''){
      setError(true)
      console.log(user.email)
    }
    if(user.password=== ''){
      setError(true)
      console.log(user.password)
    }
    if (user.name&&user.surname&&user.mobileNumber&&user.email&&user.password){
      console.log(user)
      register()
      
    }
    
   }
  
   return (
    <div className='ContainerMain'>
    <div className='SignUpContainer'>
    <form className='userInputs' onSubmit={handleSubmit}> 
      <h1>Sign Up</h1>
        <input type='text' name='name' placeholder='enter your full names'onChange={(e)=>userInput(e)}/><br></br>
      {error.name?
      <p>Please fill in your name</p>
      : ''}
        <input type='text' name='surname' placeholder='enter your full names'onChange={(e)=>userInput(e)}/><br></br>
        {error.surname?
      <p>Please fill in your surname</p>
      : ''}
        <input type='number' name='mobileNumber' placeholder='enter your mobile number'onChange={(e)=>userInput(e)}/><br></br>
        {error.mobileNumber?
      <p>Please fill in your mobile number</p>
      : ''}
        <input type='email' name='email' placeholder='enter your email'onChange={(e)=>userInput(e)} /><br></br>
        {error.email?
      <p>Please fill in your email</p>
      : ''}
        <input type='password' name='password' placeholder='enter your password'onChange={(e)=>userInput(e)}/><br></br>
        {error.password?
      <p>Please fill in your password</p>
      : ''}
        <input type='password' name='cPassword' placeholder='confirm password'onChange={(e)=>userInput(e)}/><br></br>
        {error.cPassword?
      <p>Please fill in confirm password</p>
      : ''}
        <Link to ='/Login'>
        <button className='btn-SignUp' onClick={handleSubmit}>Sign Up</button>
        </Link>
        </form>
        </div>
        </div>
  )
}

export default SignUp