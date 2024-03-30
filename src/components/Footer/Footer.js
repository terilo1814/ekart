import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className="item">
          <h1>Categories</h1>
          <span className='itemLinks'>Women</span>
          <span className='itemLinks'>Men</span>
          <span className='itemLinks'>Kids</span>
          <span className='itemLinks'>Beauty</span>
          <span className='itemLinks'>Home & Living</span>
          <span className='itemLinks'>Gift Cards</span>
        </div>
        <div className="item">
          <h1>Help</h1>
          <span className='itemLinks'>FAQs</span>
          <span className='itemLinks'>Track Order</span>
          <span className='itemLinks'>Shipping</span>
          <span className='itemLinks'>Customer Service</span>
          <span className='itemLinks'>Redeem Coupon</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
         
        </div>

        <div className="item">
          <h1>Contact us</h1>

          <div className='contactContainer'>
            <span className='contactIcon'><PlaceIcon />176, Juhu Lane Andheri, Mumbai</span>
            <span className='contactIcon'><EmailIcon />ekart@gmail.com</span>
            <span className='contactIcon'><CallIcon />+919634735881</span>
          </div>

        </div>
      </div>
      <div className='bottom'>
        <div className="left">
          <span className="logo">Ekart</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>

        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>

      </div>

    </div>

  );
};
