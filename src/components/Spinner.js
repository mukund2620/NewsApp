import React, { Component } from 'react'
import loading from '../loading.gif'

const Spinner = () => {
    return (
      <div className='text-center my-4'>
        
        <img className='my-3' src={loading} alt="" />

      </div>
    )
}

export default Spinner