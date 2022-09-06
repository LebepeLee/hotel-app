import React,{useState, useEffect} from 'react'
import Hotels from '../pages/hotels/Hotels';
import { collection,getDocs,addDoc,doc, updateDoc, deleteDoc } from 'firebase/firestore'
import {db} from '../FirebaseConfig/Firebase'
import { storage } from '../FirebaseConfig/Firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import './Room.css'

export default function Room({hotelList}) {
  const [newHotel,setNewHotel] = useState('')
  const [newCity,setNewCity] = useState('')
  const [newPrice,setNewPrice] = useState(0)
  const [newRating, setNewRating] = useState('')
  const [hotel, setHotel] = useState([])
  const [picture,setPicture] = useState('')
  const [error,setError] = useState(false)
  const [percentage,setPercentage] = useState(0)


  const hotelCollectionRef = collection(db,'hotel')
    // const createHotel = async()=>{
    //   await addDoc(hotelCollectionRef,{hotel: newHotel, city: newCity, price: newPrice})
    //   .then(()=>{
    //     alert('Hotel added successfully')
    //   })
    //   .catch((error)=>{
    //     alert('The hotel was not added,sorry'+error)
    //   })
    // }

    const updateDoc = ()=>{
      updateDoc((db,'hotel'+newHotel.value),{
      CityName: newCity.value,
      price: newPrice.value,
      rating: newRating.value,

      }).then(()=>{
        alert('Updated successfully')
      }).catch((error)=>{
        alert('Failed to update'+error)
      })
      
    }
    
    function deleteHotel(id){
      const getDoc = doc(db,'hotel',id)
      deleteDoc(getDoc).then(()=>{
        alert('hotel deleted')
      }).catch(error=>{
        console.log(error)
      })
      
 }

  useEffect (()=>{
    const getHotels = async ()=>{

      const data = await getDocs(hotelCollectionRef)
      setHotel(data.docs.map((doc)=>({...doc.data()})))
    }
    getHotels()
  },)


  function handleChange(event) {
    setPicture(event.target.files[0]);
}    

const handleSubmit = (e) =>{
  e.preventDefault ()

  if (newHotel.length ===' '){
   
    setError(true)
  
  }
  if(newCity===' '){
 
    setError(true)
  
  }

  if(newPrice===' '){
 
    setError(true)
  
  }
  if(newRating===' '){
 
    setError(true)
  
  }

}

const addHotel = () =>{
  
    if (!picture) {
      alert("Please upload an image first!");
  }

  const storageRef = ref(storage, `/files/${picture.name}`);
         
        const uploadTask = uploadBytesResumable(storageRef, picture);
 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                    
                    setPercentage(percent);
                  },
                  (err) => console.log(err),
                  () => {
                    
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log(url);
              const collectionRef = collection(db, "hotel");
              const hotel={                    
                                    name: newHotel,
                                    city: newCity,
                                    price: newPrice,
                                    image: url,
                                    rating: newRating,
                                     
                                };
              addDoc(collectionRef, hotel).then(() => {
                console.log('added')
                alert('added successfully')
                
              }).catch((errr) => {
                console.log(errr)
              


            });
                      });
  }
              );
}

 


// const addHotel = () => {


//     const storageRef = ref(
//         storage,
//         `/images/${Date.now()}${imageUpload.image.name}`
//     );
  
//     const uploadImage = uploadBytesResumable(storageRef, imageUpload.image);
//     uploadImage.on(
//         "state_changed",
//         (snapshot) => {
//             const progressPercent = Math.round(
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
//         },
//         (err) => {
//             console.log(err.message);
//         },
//         () => {
//             setImageUpload({         
//                 image: "",
//             });
//             getDownloadURL(uploadImage.snapshot.ref).then((url) => {
//                 const collectionRef = collection(db, "hotel");

//                 const hotel={                    
//                     name: newHotel,
//                     city: newCity,
//                     price: newPrice,
//                     image: url,
//                     rating: newRating,
                     
//                 };

//                 addDoc(collectionRef, hotel)
//                     .then(() => {
//                         alert("Hotel added successfully", { type: "success" });

//                     })
//                     .catch((error) => {
//                         alert("Failed to add a hotel",error);
//                     });
//             });
//         }
//     );
// };




  return (
    <div className='admin'><h1>Administration</h1>
     <div className='wrapper'>
                          <h1>New hotel</h1>
                          <input type='file' accept='image/*' onChange={(e)=>handleChange(e)}/><br></br>
                         {/* <label><img src={imageUpload.image} alt='Hotel'/></label><br></br> */}
                
                          <input type='text' placeholder='hotel name' name='NameOfHotel' id='hotelName' onChange={(e)=>setNewHotel(e.target.value)}/><br></br>    
                           {error&newHotel === ' '?<p>please fill in the name of hotel</p>  : ''}
                          <input type='text' placeholder='name of the city' id='city' name='CityName' onChange={(e)=>setNewCity(e.target.value)}/><br></br>
                          {error&newCity === ' '?<p>please fill in the name of the City</p>  : ''}
                          <input type='number' placeholder='price' id='price' name='price' onChange={(e)=>setNewPrice(e.target.value)}/><br></br>
                          {error&newHotel === ' '?<p>please fill in Price</p>  : ''}
                          <input type='text' placeholder='Rating' id='rating' name='rating' onChange={(e)=>setNewRating(e.target.value)}/><br></br>
                          {error&newHotel === ' '?<p>please fill in Rating</p>  : ''}
                          <button onClick={addHotel }>Add new hotel</button><br></br>
                          <button onClick={(e)=>{deleteHotel(hotel.id)}}>Delete</button><br></br>
                          <button onClick={updateDoc}>Update</button><br></br>
                          </div>
    
    </div>
  )
}

