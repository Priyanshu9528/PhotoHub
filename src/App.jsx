import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, useAsyncError, json } from 'react-router-dom'
import Home from './components/Home';
import Saved from './components/Saved';

const App = () => {

  const [Images, setImages] = useState([])
  const [Search, setSearch] = useState("nature")
  const [loader, setLoader] = useState(true)
  const [savedImage , setSavedImage] = useState([])


  const API_KEY= "OD53Cs4gnn1BBH49pp4Gjv3GVGq4OtT2WyEjrAtngxQdq9PAHZ5FbTCo"

  
  useEffect(()=>{
    const fetchImage = async ()=>{
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${Search}&per_page=80`,
        {
          headers:{
            Authorization:API_KEY
          },
        }
      );
      console.log(res.data.photos)
      setImages(res.data.photos)
      setLoader(false)
    } 

    const data = JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSavedImage(data)
    }
    
    fetchImage()
  },[Search])



  //use useEffect hook to save data into the local storage
useEffect(()=>{
  if(savedImage.length != 0){
    const jsonData = JSON.stringify(savedImage)   //savedImage array convert into JSON string 
    localStorage.setItem("Images",jsonData);
  }
},[savedImage])

  console.log("images is saved :", savedImage)
  return (
    <>
    <Router>
      <Navbar setSearch={setSearch}/>
      <Routes>
      <Route path ="/" element={<Home  Images={Images} loader={loader} savedImage={savedImage} setSavedImage={setSavedImage}/>}/>
      <Route path='/saved' element={<Saved savedImage={savedImage} loader={loader}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
