import React from 'react'
import photo1 from '../assets/images/Photo1.jpeg'
import photo2 from '../assets/images/photo2.jpeg'
import novios3 from '../assets/images/novios3.jpg'

export function Photos() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='container photos row my-5' data-aos="fade-up">
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="0">
          <img src={photo1} alt='random' className='img-fluid photo'/>
        </div>
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="500">
          <img src={photo2} alt='random' className='img-fluid photo' />
        </div>
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="700">
          <img src={novios3} alt='random' className='img-fluid photo' />
        </div>
      </div>
    </div>
  )
}
