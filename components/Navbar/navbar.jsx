import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Nextgif from '/public/ProfilePic2.gif'

function Navbar() {

    const links = [
        {  href: "/#about", classname: "fa-solid fa-house", text: "sobre mí" },
        {  href: "/#experience", classname: "fa-solid fa-brain", text: "Experiencia" },
        {  href: "/devtips", classname: "fa-solid fa-address-book", text: "Dev tips!" },
    ];
    
    return (
    <div className="navbar">
        <Link className="logo" rel='noreferrer' href="/">
            <Image
                src={Nextgif}
                alt="Logo"
                id='logo'
                width={60}
                height={60}
                className="gif"
                href="/#about"
            />
        </Link>
        
        <div className="buttons_mid">
            {links.map((l) => (
                <Link className="button" key={l.href} href={l.href}>
                    <i className={l.classname}></i><div className="bug">{l.text}</div>
                </Link>
            ))}
        </div>

        <div className="buttons_corner">
            <Link className="greenbtn" href="https://wa.me/message/5F7KIECVDD3NI1" target="_blank" rel='noreferrer'>
                <i className="fa-brands fa-whatsapp"></i> <div className="bug">Hablemos!</div>
            </Link>
            <div className="configbutton">
                <i className="fa-sharp fa-solid fa-earth-americas"></i>
            </div>
            <div className="toggle-switch">
                <label className="switch-label">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="slider"></span>
                </label>
            </div>  
        </div>
    </div>
    )
}

export default Navbar