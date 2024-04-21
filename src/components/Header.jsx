import React from 'react'
import logo from '../assets/images/logo.png';
import flores from '../assets/images/flores.png';
import flores2 from '../assets/images/flores2.svg';
import MusicPlayer from './MusicPlayer';

function Header() {
    return (
        <header className="d-flex flex-column justify-content-center text-center pb-5">
            <div className='d-flex flex-column justify-content-center flowers-container'>
                <img src={flores} className="img-fluid flowers" alt="logo" />
            </div>
            <div className='d-flex justify-content-center' data-aos="fade-up">
                <img src={logo} className="img-fluid logo" alt="logo"/>
            </div>
            <h1 className='title pb-5' data-aos="fade-up" >Devendra Kumar Jhalani & Mohini devi</h1>
            <MusicPlayer />
            <div className='d-flex justify-content-center' data-aos="fade-up">
                <p className='header-text pb-5'>Join us in celebrating a year of milestones, memories, and moments that matter!</p>
            </div>
            <div className='d-flex justify-content-center' data-aos="fade-up">
                <img src={flores2} className="img-fluid flowers2" alt="logo" />
            </div>
        </header>
    )
}

export default Header