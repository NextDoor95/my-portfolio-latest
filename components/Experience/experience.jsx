"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from 'next/image'

import Link from 'next/link'

import Nof from 'public/experience/nof.png'
import Speezard from 'public/experience/Speezard.png'
import Clock from 'public/experience/project7.png'
import Wapu from 'public/experience/Wapu.png'
import Point from 'public/experience/Point.png'
import Scd from 'public/experience/Scd.png'

function Experience() {

    const projects = [
        {
            id: 1,
            src: Speezard,
            alt: "Speezard project",
            title: "Speezard",
            text: "Frontend developer in my spare time for the Speezard pre-accelerator.",
            web: 'https://www.speezard.io/',
            webbtn: "fa-solid fa-arrow-up-right-from-square",
            code: 'https://github.com/leonardoromero/landing-speezard',
            codebtn: "fa-brands fa-github",
            discord: 'https://discord.gg/resiliente',
            discordbtn: "fa-brands fa-discord",
            twitter: 'https://twitter.com/Speezard_W3',
            twitterbtn: "fa-brands fa-twitter"
        },
        {
            id: 2,
            src: Nof,
            alt: "Nof project",
            title: "Number One Fan",
            text: "Web3 project that combines gaming and NFT album collectibles with a PixelArt style.",
            web: 'https://nof.town/',
            webbtn: "fa-solid fa-arrow-up-right-from-square",
            code: 'https://github.com/P4-Games/NoF-LandingPage',
            codebtn: "fa-brands fa-github",
            discord: 'https://discord.gg/4Bvp5bVmCz',
            discordbtn: "fa-brands fa-discord",
            twitter: 'https://twitter.com/NOFtoken',
            twitterbtn: "fa-brands fa-twitter"
        },
        {
            id: 3,
            src: Wapu,
            alt: "Wapu app",
            title: "Wapu",
            text: "Web3 wallet to pay P2P with no restrictions in diferent countries!.",
            web: 'https://app.cryptopagos.xyz/',
            webbtn: "fa-solid fa-arrow-up-right-from-square",
            code: 'https://github.com/AndresChapo/survivors',
            codebtn: "fa-brands fa-github",
            discord: 'https://discord.gg/WzuKc7Bzt3',
            discordbtn: "fa-brands fa-discord",
            twitter: 'https://twitter.com/wapupay',
            twitterbtn: "fa-brands fa-twitter"
        },
        {
            id: 4,
            src: Point,
            alt: "Point project",
            title: "Tienda Point",
            text: "Mercado Libre: Store edited for Mercado Shops.",
            web: 'https://www.tiendapoint.com.ar/',
            webbtn: "fa-solid fa-arrow-up-right-from-square",
        },
        {
            id: 5,
            src: Scd,
            alt: "SCD project",
            title: "SCD distributor",
            text: "Mercado Libre: Distributor store edited for Mercado Shops.",
            web: 'https://www.scd-distribuidora.com.ar/',
            webbtn: "fa-solid fa-arrow-up-right-from-square",
        },
        {
            id: 6,
            src: Clock,
            alt: "Clock project",
            title: "Clock UX/UI",
            text: "Modern minimalist style clock with dark/light-mode.",
            web: 'https://nextdoor95.github.io/UX-UI-Clock.github.io/Index.html',
            webbtn: "fa-solid fa-arrow-up-right-from-square",
            code: 'https://github.com/NextDoor95/UX-UI-Clock.github.io',
            codebtn: "fa-brands fa-github",
            discord: 'https://discord.gg/resiliente',
            discordbtn: "fa-brands fa-discord",
            twitter: 'https://twitter.com/Speezard_W3',
            twitterbtn: "fa-brands fa-twitter"
        },
    ];

    return (
    <section className="experience" id="experience">
        <h2 className="title">
            Experience
        </h2>

        <div>
                <div className='slider'>
                    <Swiper
                        navigation
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 12000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            724: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 },
                            1324: { slidesPerView: 3 },
                        }}
                        loop
                    >
                        {projects.map((p) => (
                            <SwiperSlide key={p.id}>
                                <div className="individualproject">
                                    <div className="glassBox">
                                        <div className="imgproject">
                                            <Image 
                                                src={p.src}
                                                alt={p.alt}
                                                height={150}
                                                width={350}
                                                className="img"
                                            />
                                        </div>
                                        <div className="text">
                                            <div className="subtitle">
                                                <span>
                                                    {p.title}
                                                </span>
                                            </div>
                                            <div>
                                                {p.text}
                                            </div>
                                        </div>
                                        <div className="socialicons">
                                            <Link
                                                className="button"
                                                href={p.web}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.webbtn}></i>
                                            </Link>
                                            {p.discord && (<Link
                                                className="button"
                                                href={p.code}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.codebtn}></i>
                                            </Link>
                                            )}
                                            {p.discord && (<Link
                                                className="button"
                                                href={p.discord}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.discordbtn}></i>
                                            </Link>
                                            )}
                                            {p.twitter && (<Link
                                                className="button"
                                                href={p.twitter}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.twitterbtn}></i>
                                            </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </div>
    </section>
    )
}

export default Experience