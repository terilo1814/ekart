import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='wrapper'>
                <span>BE IN TOUCH WITH US</span>
                <div className='mail'>
                    <input type='text' placeholder='Enter email address' />
                    <button>JOIN US</button>
                </div>
                <div className='icons'>
                    <Link className='link' to='https://www.facebook.com/'><FacebookIcon /></Link>
                    <Link className='link' to='https://www.instagram.com/'><InstagramIcon /></Link>
                    <Link className='link' to='https://twitter.com/'><XIcon /></Link>
                    <Link className='link' to='https://in.pinterest.com/'><PinterestIcon /></Link>
                    <Link className='link' to='https://www.google.co.in/'><GoogleIcon /></Link>
                </div>

            </div>
        </div>
    )
}
