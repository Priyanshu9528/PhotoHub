import React from 'react'
import spinner from '../spinner.gif'
const Loader = () => {
  return (
    <>
      <div className='loader_img'>
        <img src={spinner} alt=''/>
      </div>
    </>
  )
}

export default Loader
