import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Resiliente from '/public/resiliente.svg'
import Speezard from '/public/speezard.svg'

function Footer() {

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in", text: "LinkedIn"},
        {href: "https://twitter.com/NextDoor95", classname: "fa-brands fa-twitter", text: "Twitter"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github", text: "Github"},
        {href: "https://github.com/NextDoor95/my-portfolio-latest", classname: "fa-solid fa-file-code", text: "Portfolio code"},
    ]

    return (
        <section className="footer">
            <div className="top">
                <div className="left">
                    <p>
                        Co-building web3 <br/> in minimum viable community
                    </p>
                    <Link className="logo" rel='noreferrer' target='_blank' href="https://twitter.com/Resilientes_W3">
                        <Image
                            src={Resiliente}
                            alt="Resilientes-logo"
                            width="auto"
                            height={50}
                            className='image'
                        />
                    </Link>
                    <Link className="logo" rel='noreferrer' target='_blank' href="https://www.speezard.io/">
                        <Image
                            src={Speezard}
                            alt="Speezard-logo"
                            width="auto"
                            height={50}
                            className='image'
                        />
                    </Link>
                </div>
                <div className="right">

                    <div className="col">
                        <p>See again</p>
                            <Link className="linkbutton" href="#about" rel='noreferrer'>
                                <p className="footer-btn">
                                    About
                                </p>
                            </Link>
                            <Link className="linkbutton" href="#experience" rel='noreferrer'>
                                <p className="footer-btn">
                                    Experience
                                </p>
                            </Link>
                            <Link className="linkbutton" href="/dev" rel='noreferrer'>
                                <p className="footer-btn">
                                    Dev Tips!
                                </p>
                            </Link>
                    </div>
                    <div className="col">
                        <p>Web3 communities</p>
                            <Link className="linkbutton" href="https://twitter.com/Resilientes_W3" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Resilientes
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://twitter.com/ThinkandDev" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Think&Dev
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://twitter.com/LaCryptaOficial" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    La Crypta
                                </p>
                            </Link>
                    </div>
                    <div className="col">
                        <p>Contact</p>
                            <Link className="linkbutton" href="https://wa.me/message/5F7KIECVDD3NI1" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    WhatsApp
                                </p>
                            </Link>
                            <Link className="linkbutton" href="mailto:nestorhuircapan25@gmail.com" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    E-mail
                                </p>
                            </Link>
                            
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="social">
                    <Link
                        className="button-footer" 
                        href="https://beta.talentprotocol.com/u/nextdoor"
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className="fa-sharp fa-solid fa-t"></i>
                        <p className="bug">
                            Talent Protocol
                        </p>
                    </Link>
                    {icons.map((i) => (
                        <Link className="button-footer" key={i.href} href={i.href} target='_blank' rel='noreferrer'>
                            <i className={i.classname}></i> <p className="bug">{i.text}</p>
                        </Link>
                    ))}
                    
                </div>
                <div className="rights-reserved">
                    <p>
                        NextDoor | 2023 © all rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer