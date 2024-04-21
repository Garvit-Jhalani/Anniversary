import React from 'react'
import {HiUserGroup} from 'react-icons/hi'
import {RiHeartsFill} from 'react-icons/ri'
export function Place() {
  return (
    <div className='place-container d-flex justify-content-center'>
      <div className='container d-flex justify-content-center'>
        <div className='place-row row my-5 text-center'>
          <div className='col-6 mb-3' data-aos="fade-up" data-aos-delay="0">
            <div className='place-image mx-auto mb-3'>
              <HiUserGroup />
            </div>
            <h2 className='fs-5'>Banna-Banni</h2>
          </div>
          <div className='col-6 mb-3' data-aos="fade-up" data-aos-delay="300">
            <div className='place-image mx-auto mb-3'>
              <RiHeartsFill />
            </div>
            <h2 className='fs-5'>Dinner</h2>
          </div>
          <div className='col-6 mb-5' data-aos="fade-up" data-aos-delay="0">
            <h3 className='fw-light fs-1 place-text'>6:00pm-8:00pm</h3>
          </div>
          <div className='col-6 mb-5' data-aos="fade-up" data-aos-delay="300">
            <h3 className='fw-light fs-1 place-text'>8:00pm onwards</h3>
          </div>
          <div className='col-12' data-aos="fade-up" data-aos-delay="700">
            <a target="_blank" href="https://www.google.com/maps/place/Hotel+Grand+Majestic-Bani+Park/@26.9354157,75.7871283,17z/data=!3m1!4b1!4m9!3m8!1s0x396db395a14feb5b:0x2a3d2e1b187b8269!5m2!4m1!1i2!8m2!3d26.9354157!4d75.7897032!16s%2Fg%2F11nxrmlljc?entry=ttu" rel="noreferrer" className='text-decoration-none text-black '>
              <span className='fs-5 mb-3'>The Grand Majestic Hotel</span>
              <div className='d-flex justify-content-center mb-3'>
                <p className='place-p'>Bani Park, Jaipur</p>
              </div>
              <button className='btn btn-outline-dark rounded-pill raleway'>View Maps</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
