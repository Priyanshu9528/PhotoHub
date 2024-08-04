import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Navbar = ({setSearch}) => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <>
    <div className='nav mt-3'>
    <div className='button btn btn-outline-warning mx-3' onClick={()=>{setSearch("nature") 
    navigate('/')}}>Nature</div>
    <div className='button btn btn-outline-info mx-3' onClick={()=>{setSearch("beach")
    navigate('/')}}>Beach</div>          
    <div className='button btn btn-outline-primary mx-3' onClick={()=>{setSearch("adventure")
    navigate('/')}}>Adventure</div>
    <div className='button btn btn-outline-light mx-3' onClick={()=>{setSearch("car")
    navigate('/')}}>Car</div>
    <div className='button btn btn-outline-success mx-3' onClick={()=>{setSearch("travel")
    navigate('/')}}>Travel</div>
    <div className='button btn btn-outline-warning mx-3' onClick={()=>{setSearch("healthy")
    navigate('/')}}>Healthy</div>
    <div className='button btn btn-outline-light mx-3' onClick={()=>{setSearch("technology")
    navigate('/')}}>Technology</div>
    <div className='button btn btn-outline-warning mx-3' onClick={()=>{setSearch("business")
    navigate('/')}}>Business & Finance</div>
    <div className='button btn btn-outline-light mx-3' onClick={()=>{setSearch("tokyo")
    navigate('/')}}>Tokyo</div>
    <div className='button btn btn-outline-info mx-3' onClick={()=>{setSearch("dubai")
    navigate('/')}}>Dubai</div>

{location.pathname == '/saved'? (<div className='button btn btn-warning mx-3' onClick={()=>navigate('/')}>Home</div> ) : 
  (<div className='button btn btn-warning mx-3' onClick={()=>navigate('/saved')}>Saved</div>
)}
    
    
    </div>

    <div className='container my-4 ' style={{width:'780px'}}>
    {location.pathname == '/' && 
    (<div className="mb-3 ">
    <input type="text" onChange={(e)=>setSearch(e.target.value)} className="form-control bg-dark text-light" id="exampleInput"/>
  </div>)}
    </div>
    </>
  )
}

export default Navbar
