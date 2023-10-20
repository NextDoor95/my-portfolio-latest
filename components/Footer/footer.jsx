import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Resiliente from '/public/resiliente-color.png'
import Speezard from '/public/Speezard.png'

function Footer() {

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in", text: "LinkedIn"},
        {href: "https://twitter.com/NextDoor95", classname: "fa-brands fa-twitter", text: "Twitter"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github", text: "Github"},
        {href: "https://github.com/NextDoor95/PortfolioWeb", classname: "fa-solid fa-file-code", text: "Portfolio code"},
    ]

    return (
        <section className="footer">
            <div className="top">
                <div className="left">
                    <p>
                        Co-construyendo la web3<br/> en comunidad mínima viable
                    </p>
                    <Link className="logo" rel='noreferrer' href="/">
                        <Image
                            src={Resiliente}
                            alt="Resiliente"
                            width={220}
                            height={40}
                            href="https://twitter.com/Resilientes_W3"
                        />
                    </Link>
                    <Link className="logo" rel='noreferrer' href="/">
                        <Image
                            src={Speezard}
                            alt="Resiliente"
                            width={220}
                            height={50}
                            href="https://twitter.com/Speezard_W3"
                        />
                    </Link>
                </div>
                <div className="right">

                    <div className="col">
                        <p>Volver a ver</p>
                            <Link className="linkbutton" href="/#about" rel='noreferrer'>
                                <p className="footer-btn">
                                    sobre mí
                                </p>
                            </Link>
                            <Link className="linkbutton" href="/#experience" rel='noreferrer'>
                                <p className="footer-btn">
                                    Experiencia
                                </p>
                            </Link>
                            <Link className="linkbutton" href="/#contact" rel='noreferrer'>
                                <p className="footer-btn">
                                    Dev Tips!
                                </p>
                            </Link>
                    </div>
                    <div className="col">
                        <p>Comunidades web3</p>
                            <Link className="linkbutton" href="https://twitter.com/Resilientes_W3" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Resilientes
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://twitter.com/LaCryptaOficial" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    La Crypta
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://twitter.com/ThinkandDev" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Think&Dev
                                </p>
                            </Link>
                    </div>
                    <div className="col">
                        <p>Contáctame!</p>
                            <Link className="linkbutton" href="https://wa.me/message/5F7KIECVDD3NI1" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    WhatsApp
                                </p>
                            </Link>
                            <a className="linkbutton" mailto="nestorhuircapan25@gmail.com" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    E-mail
                                </p>
                            </a>
                            
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="rights-reserved">
                    <p>
                        NextDoor | 2023 © all rights reserved.
                    </p>
                </div>
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
            </div>
        </section>
    )
}

export default Footer