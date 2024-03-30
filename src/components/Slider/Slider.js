import React, { useState } from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './Slider.scss'


export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

    
    return (
        <div className='slider'>
            <div className='container' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt='' />
                ))}
            </div>
            <div className='icons'>
                <div className='icon' onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className='icon'>
                    <EastOutlinedIcon onClick={nextSlide} />
                </div>
            </div>
        </div>
    )
}
