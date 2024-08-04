import React from 'react'
import Loader from './Loader'
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({Images,loader,setSavedImage,savedImage}) => {

  const saveImage = (img)=>{
    let flag = true;
    if (savedImage !== null && savedImage.length > 0) {
      for (let i = 0; i < savedImage.length; i++) {
        if (savedImage[i].id === img.id) {
          flag = false;
          //react-toastify
          toast.info('Image already saved', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        break;
        }
      }
    }

    if(flag){
      setSavedImage([...savedImage,img]);
      toast.success('Image saved Successfully', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }
  return (
    <>
    <ToastContainer />

      <div className='container-fluid text-center' id='top'>
      {loader ? (<Loader/>)
      :
      (
        <div className='flex'>
        {Images.map((Images)=>
          <div key={Images.id} className='items' onClick={()=>saveImage(Images)}>
          <img src={Images.src.medium} alt='Images.photographer'/>
        </div>
        )}
        </div>
      )}
        {Images.length != 0 && (<a href='#top' className='btn btn-warning my-5'>Back To Top</a>)}
      </div>
    </>
  )
}

export default Home
