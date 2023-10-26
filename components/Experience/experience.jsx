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

function Experience() {

    const projects = [
        {
            id: 1,
            src: Speezard,
            alt: "Speezard project",
            title: "Speezard",
            text: "Frontend developer in my spare time for the Speezard pre-accelerator.",
            web: 'https://www.speezard.io/',
            webbtn: "fa-solid fa-link",
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
            text: "My first real Web3 project that combines gaming and NFT album collectibles with a PixelArt style.",
            web: 'https://nof.town/',
            webbtn: "fa-solid fa-link",
            code: 'https://github.com/P4-Games/NoF-LandingPage',
            codebtn: "fa-brands fa-github",
            discord: 'https://discord.gg/4Bvp5bVmCz',
            discordbtn: "fa-brands fa-discord",
            twitter: 'https://twitter.com/NOFtoken',
            twitterbtn: "fa-brands fa-twitter"
        },
        {
            id: 3,
            src: Speezard,
            alt: "Speezard project",
            title: "Speezard Lorem lorem",
            text: "Lorem ipsum no me acuerdo como seguía y no me tira el shortcut para poner un texto largo acá, pero como tome suficiente café puedo hacerlo mas rapido que VSCode, yo 1, VSCode 0.",
            web: 'https://www.speezard.io/',
            webbtn: "fa-solid fa-link",
            code: 'https://github.com/P4-Games/NoF-LandingPage',
            codebtn: "fa-brands fa-github",
            discord: 'https://discord.gg/resiliente',
            discordbtn: "fa-brands fa-discord",
            twitter: 'https://twitter.com/Speezard_W3',
            twitterbtn: "fa-brands fa-twitter"
        },
        {
            id: 4,
            src: Clock,
            alt: "Clock project",
            title: "Reloj UX/UI",
            text: "Reloj moderno de estilo minimalista con dark/light-mode y datos de la fecha actual hecho puramente con HTML, CSS y JavaScript",
            web: 'https://nextdoor95.github.io/UX-UI-Clock.github.io/Index.html',
            webbtn: "fa-solid fa-link",
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
        <div className="title">
            Experiencia
        </div>

        <div>
                <div className='slider'>
                    <Swiper
                        navigation
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            724: { slidesPerView: 2 },
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
                                                width={300}
                                                className="img"
                                            />
                                        </div>
                                        <div className="text">
                                            <div className="title">
                                                <span>
                                                    {p.title} :
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
                                            <Link
                                                className="button"
                                                href={p.code}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.codebtn}></i>
                                            </Link>
                                            <Link
                                                className="button"
                                                href={p.discord}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.discordbtn}></i>
                                            </Link>
                                            <Link
                                                className="button"
                                                href={p.twitter}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className={p.twitterbtn}></i>
                                            </Link>
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