import React from 'react'

export function Footer() {
  return (
    <div>
      <div className='footer d-flex flex-column align-items-center justify-content-center p-3 pt-4 text-white'>
        <div className='container text-center footer-text'>
          Comparte con nosotros todas tus fotografías del evento, usando el siguiente #hashtag en todas tus publicaciones de Facebook e Instagram.
        </div>
        <span className='hashtag my-4 mb-3'>#BodaKarla&Samuel</span>
      </div>
    {/* <div>
      <div className='container d-flex justify-content-center align-items-center py-2'>
        Hecho por <a href='https://joaosouza.tk/' className="mx-1" target='_blank' rel='noopener noreferrer'>Joao Souza</a>
      </div>
    </div> */}
    </div>
  )
}
