"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import Whatsapp from '/public/social/whatsapp.svg'

/*import { Slant as Hamburger } from 'hamburger-react'*/

import Nextgif from '/public/ProfilePic2.gif'

function Navbar() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const links = [
        {  href: "/#about", classname: "fa-solid fa-house", text: "About" },
        {  href: "/#experience", classname: "fa-solid fa-brain", text: "Experience" },
        {  href: "/dev", classname: "fa-solid fa-address-book", text: "Dev-tips!" },
    ];
    
    return (
    <div className="navbar">
        <Link
            className="logo"
            rel='noreferrer'
            href="/"
        >
            <Image
                src={Nextgif}
                alt="Logo"
                id='logo'
                width={60}
                height={60}
                className="gif"
                href="/"
            />
        </Link>
        
        <div className="buttons_mid">
            {links.map((l) => (
                <Link className="button" key={l.href} href={l.href}>
                    <div className='icons-navbar'><i className={l.classname}></i></div><p className="bug">{l.text}</p>
                </Link>
            ))}
        </div>

        <div className="buttons_corner">
            {windowSize.width <= 900 ? (
                
                <Link className="whatsapp-mobile" rel='noreferrer' href="/">
                    <Image
                        src={Whatsapp}
                        alt="Resilientes-logo"
                        width="auto"
                        height={35}
                        className='image'
                        href="https://twitter.com/Resilientes_W3"
                    /> 
                </Link>
                ) : (
                <Link className="greenbtn" href="https://wa.me/message/5F7KIECVDD3NI1" target="_blank" rel='noreferrer'>
                    <Image
                        src={Whatsapp}
                        alt="Resilientes-logo"
                        width="auto"
                        height={25}
                        className='image'
                        href="https://twitter.com/Resilientes_W3"
                    />
                    <div className="chat">Lets chat!</div>
                </Link>
            )}
        </div>
    </div>
    )
}

export default Navbar