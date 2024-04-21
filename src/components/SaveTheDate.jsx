import React from 'react'
import Counter from './Counter'

export function SaveTheDate() {
  return (
    <div className='savethedate text-center'>
        <div className='container py-3' data-aos="fade-up">
            <h2>Save The Date</h2>
            <div className='fw-bold mt-3 mb-2 fs-4'>• 30th April 2024 •</div>
            <div className='fw-bolder mb-4'>The Grand Majestic Hotel</div>
            <div className='fw-semibold mb-3'>Time:</div>
            <Counter />
        </div>
    </div>
  )
}
