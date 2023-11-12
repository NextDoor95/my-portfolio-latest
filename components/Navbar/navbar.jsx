"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from "framer-motion";

import { useState, useEffect } from 'react'

import Whatsapp from '/public/social/WhatsApp.svg'

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
        {  href: "/#about", classname: "fa-solid fa-house", text: "About", duration: "duration: 1" },
        {  href: "/#experience", classname: "fa-solid fa-brain", text: "Experience", duration: "duration: 1.5" },
        {  href: "/dev", classname: "fa-solid fa-address-book", text: "Dev-tips!", duration: "duration: 2" },
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
        <motion.div
                    initial={{y: -20, opacity: 0 }}
                    animate={{y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
        <div className="buttons_mid">
            {links.map((l) => (
                
                <Link className="button" key={l.href} href={l.href}>
                    <div className='icons-navbar'><i className={l.classname}></i></div><p className="bug">{l.text}</p>
                </Link>
                
            ))}
        </div>
        </motion.div>
        <div className="buttons_corner">
            {windowSize.width <= 900 ? (
                <Link className="whatsapp-mobile" href="https://wa.me/message/KB2WNBOZ7QDKD1" target="_blank" rel='noreferrer'>
                    <Image
                        src={Whatsapp}
                        alt="Whatsapp"
                        width="auto"
                        height={35}
                        className='image'
                    /> 
                </Link>
                ) : (
                <Link className="greenbtn" href="https://wa.me/message/KB2WNBOZ7QDKD1" target="_blank" rel='noreferrer'>
                    <Image
                        src={Whatsapp}
                        alt="Whatsapp"
                        width="auto"
                        height={25}
                        className='image'
                    />
                    <p className="chat">Lets chat!</p>
                </Link>
            )}
        </div>
    </div>
    )
}

export default Navbar