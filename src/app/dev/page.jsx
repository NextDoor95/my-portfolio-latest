"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Chatgpt from '../../../public/tips/Chat-GPT.png'
import DevMozzila from '../../../public/tips/dev-mozzila.png'
import Freecodecamp from '../../../public/tips/FreeCodeCamp.png'
import Codepen from '../../../public/tips/Codepen.png'
import Cryptozombies from '../../../public/tips/Cryptozombies.png'
import Remix from '../../../public/tips/Remix.png'
import Uiverse from '../../../public/tips/Uiverse.png'
import Favicon from '../../../public/tips/Favicon.png'


function Devtips() {

    
    const tips = [
        {
            id: 1,
            src: Chatgpt,
            alt: "Chat-GPT",
            title: "Chat-GPT",
            text: "Your AI-powered conversation assistant for precise and coherent text responses.",
            web: 'https://openai.com/',
        },
        {
            id: 2,
            src: Freecodecamp,
            alt: "FreeCodeCamp",
            title: "FreeCodeCamp",
            text: "Free platform for learning to code and developing coding skills.",
            web: 'https://www.freecodecamp.org/',
        },
        {
            id: 3,
            src: DevMozzila,
            alt: "DevMozzila",
            title: "MDN Web Docs",
            text: "Reliable resource for learning about web development and online technologies.",
            web: 'https://developer.mozilla.org/es/',
        },
        {
            id: 4,
            src: Codepen,
            alt: "Codepen",
            title: "Codepen",
            text: "Online canvas for experimenting and sharing creative code.",
            web: 'https://codepen.io/',
        },
        {
            id: 5,
            src: Cryptozombies,
            alt: "Cryptozombies",
            title: "Crypto Zombies",
            text: "Learn blockchain and smart contract programming in a fun way.",
            web: 'https://cryptozombies.io/',
        },
        {
            id: 6,
            src: Remix,
            alt: "Remix",
            title: "Remix",
            text: "The web development platform that accelerates modern app creation.",
            web: 'https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js',
        },
        {
            id: 7,
            src: Uiverse,
            alt: "Uiverse",
            title: "Uiverse",
            text: "Create, share, and use beautiful custom elements made with CSS or Tailwind.",
            web: 'https://uiverse.io/',
        },
        {
            id: 8,
            src: Favicon,
            alt: "Favicon",
            title: "Favicon",
            text: "Quickly generate your favicon from text, image, or choose from hundreds of emojis.",
            web: 'https://favicon.io/',
        },
    ];

    return (
        <section className="devtips">
            <Head>
                <title>Dev Tips!</title>
                <meta name="tips for frontend developer" content="Tips for IT people" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <h2 className="title">Tips to improve as a developer (or any position in IT).</h2>
                <div className="dev-wrap">
                    <div className="dev-intro">
                        <p>
                        Navigate the ever-evolving <span>Tech Industry</span>, a realm of constant challenge that requires ongoing <span>adaptation and learning</span>.
                        <br></br><span>Explore tools</span> that will accelerate your <span>learning process</span> and enhance the value of your knowledge in this exciting professional landscape.
                        </p>
                    </div>
                </div>
            

            <div>
                <div className="devprojects">
                    <Swiper
                        navigation
                        spaceBetween={10}
                        pagination={ false }
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 6000,
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
                        {tips.map((t) => (
                            <SwiperSlide key={t.id}>
                                <div className="individualproject">
                                    <div className="glassBox">
                                        <div className="imgproject">
                                            <Image 
                                                src={t.src}
                                                alt={t.alt}
                                                height={150}
                                                width={300}
                                                className="img"
                                            />
                                        </div>
                                        <div className="text">
                                            <div className="subtitle">
                                                <span>
                                                    {t.title}
                                                </span>
                                            </div>
                                            <div>
                                                {t.text}
                                            </div>
                                        </div>
                                            <div className="socialdev">
                                                <Link
                                                    className="button"
                                                    href={t.web}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    <p>Go to page</p><i className="fa-solid fa-arrow-up-right-from-square bug"></i>
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

export default Devtips