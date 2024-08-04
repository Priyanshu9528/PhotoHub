import React from 'react'
import Loader from './Loader'

const Saved = ({savedImage , loader}) => {
  return (
    <>
          <div className='container-fluid text-center' id='top'>
      {loader | savedImage.length ===0 ? (<Loader/>)
      :
      (
        <div className='flex'>
        {savedImage.map((Images)=>
          <div key={Images.id} className='items'>
          <img src={Images.src.medium} alt='Images.photographer'/>
        </div>
        )}
        </div>
      )}
        {savedImage.length != 0 && (<a href='#top' className='btn btn-warning my-5'>Back To Top</a>)}
      </div>
    </>
  )
}

export default Saved
