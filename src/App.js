
import './App.css';
// import Banner from './components/banner/Banner';

// import Mailbox from './components/mailbox/Mailbox';
// import Footer from './components/footer/Footer'
import Hotels from './pages/hotels/Hotels';
import Navigation from './Navigation';
import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom'
import SignUp from './components/SignIn/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Login from './components/Login/Login'
import Hotel from './pages/home/Hotel'
import {db} from './FirebaseConfig/Firebase'
import { getDocs ,collection} from 'firebase/firestore';

import fire from './hotelimages/fire.webp';
import hotel1 from './hotelimages/hotel1.jpg';
import Room from './admin/Room'
import { useEffect, useState } from 'react';

// import hotel2 from './hotelimages/hotel2.jpg';
// import hotel3 from './hotelimages/hotel3.jpg';
// import hotel4 from './hotelimages/hotel4.jpg';


function App() {
 const [hotels,setHotels] = useState([])
 const hotelsCollectionRef = collection(db,'hotel')
  // {/*<Navigation/>
  //     <Banner />
   
  //     <Hotels />
  //     <Mailbox />
  //     <Footer />*/}


//   const hotelList = [{
//     name: "Fire and Ice",
//     image: fire,
//     city:'pretoria',
//     amount:950,
//     id:'1'
//  },
//  {
//        name: "Hotel Sky",
//        image: hotel1,
//        city:'Polokwane',
//        amount:500,
//        id:'2'
//  },
//  {
//        name: "City Lodge",
//        image: hotel1,
//        city:'Durban',
//        amount:500,
//        id:'3'
//  },
//  {
//        name: "Manhanttan Hotel",
//        image: hotel1,
//        city:'Johannesburg',
//        amount:500,
//        id:'4'
//  },
//  {
//        name: "Hotel 224",
//        image: hotel1,
//        city:'Cape Town',
//        amount:500,
//        id:'5'
//  }

// ]
//function to read hotels from firebase



      //write code here
     

      useEffect(()=>{
      const getHotels = async ()=>{

            const data = await getDocs(hotelsCollectionRef)
            setHotels(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
            console.log(data)
          }
          getHotels()
            },[])
  return (
  
      <Router>
        <Routes>
         
          
           <Route exact path='/' element={<Navigation />}>
            <Route index element={<Hotels hotels={hotels} />} />
            
           </Route>

           <Route path='/signUp' element={<SignUp/>}/>
           <Route path ='/login' element={<Login/>}/>
           <Route path ='/forgotPassword' element={<ForgotPassword/>}/>
           <Route path ='/hotel/:id' element={<Hotel hotelList={hotels}/>}/>
           <Route path = '/admin' element ={<Room/>}/>
          
    </Routes>
    </Router>
      
 
  );
  

}

export default App;
