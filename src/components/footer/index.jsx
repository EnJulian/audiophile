import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <div className='bg-black flex flex-col items-center justify-center text-center py-[48px] px-[24px] text-white mx-auto gap-y-[48px]'>
      <img src={logo} alt="Footer Logo" className='mx-auto my-4' />
      <ul className='flex flex-col gap-y-[16px] subtitle'>
        <li>
            <Link to="/" className='hover:text-gray-400' >
              HOME
            </Link>
        </li>
        <li>
            <Link to="/" className='hover:text-gray-400'>
              HEADPHONES
            </Link>
        </li>
        <li>
            <Link to="/" className='hover:text-gray-400' >
              SPEAKERS
            </Link>
        </li>
        <li>
            <Link to="/" className='hover:text-gray-400' >
              EARPHONES
            </Link>
        </li>
      </ul>

      <p className='subtitle-2'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <p className='subtitle-2'>Copyright 2021. All Rights Reserved</p>
      <div className='flex items-center mx-auto gap-x-[16px]'>
      <img
        src={ facebookIcon}
        alt='Footer Icon'
        className='mx-auto my-4'
      />
       <img
        src={instagramIcon }
        alt='Footer Icon'
        className='mx-auto my-4'
      />
       <img
        src={ twitterIcon}
        alt='Footer Icon'
        className='mx-auto my-4'
      />
      </div>
    </div>
  );
};

export default Footer;
