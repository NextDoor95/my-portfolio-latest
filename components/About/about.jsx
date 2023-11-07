"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import Link from 'next/link'
import Image from 'next/image'

import Spline from '@splinetool/react-spline'

import Javascript from 'public/stack/JavaScript-logo.png'
import Typescript from 'public/stack/Typescript.png'
import Reacticon from 'public/stack/react.png'
import Nexticon from 'public/stack/nextjs.png'
import Sass from 'public/stack/sass.jpg'
import Git from 'public/stack/git.png'
import Hardhat from 'public/stack/hardhat.png'
import Solidity from 'public/stack/solidity.png'


function About(props) {

    const logos = [
        {id: 1, src: Javascript, alt: "JavaScript"},
        {id: 2, src: Typescript, alt: "TypeScript"},
        {id: 3, src: Sass, alt: "Sass"},
        {id: 4, src: Git, alt: "Git"},
        {id: 5, src: Reacticon, alt: "React.js"},
        {id: 6, src: Nexticon, alt: "Next.js"},
        {id: 7, src: Solidity, alt: "Solidity"},
        {id: 8, src: Hardhat, alt: "Hardhat"}
    ];

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github"},
        {href: "https://twitter.com/NextDoor95", classname: "fa-brands fa-twitter"},
    ];
    
    return (
        <section className="about" id="about">
            <div className="profile">
                <div className="spline-wrap">
                    <Spline
                        scene="https://draft.spline.design/n2cho1B-rb-ecbcd/scene.splinecode"
                        className="spline"
                    />
                </div>
                <motion.div
                    initial={{y: 300, opacity: 0 }}
                    animate={{y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                <div className="glass-wrap">
                    <div className="glassBox">
                        <p className='text'>
                            Hi! My name is <span>Néstor</span> from <span>Puerto Madryn, Chubut, Argentina</span>.<br/>
                            A self-taught web developer, I specialize in designing and coding the <span>frontend </span>
                            for various projects, with focus on <span>UX/UI</span>. I am enthusiastic about the<span> web3 </span>
                            world and always eager to learn more about the latest technologies and trends.
                            I am proactive, using agile methodologies, and always ready to collaborate.
                            <br/>
                        </p>
                        <br/>
                        <h2>
                            <span>My tech stack:</span>
                        </h2>
                        <div className='slider'>
                            <Swiper
                                navigation
                                spaceBetween={10}
                                pagination={ false }
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 3 },
                                    724: { slidesPerView: 4 },
                                    900: { slidesPerView: 4 },
                                    1024: { slidesPerView: 5 },
                                    1200: { slidesPerView: 5 },
                                    1324: { slidesPerView: 5 },
                                }}
                                loop
                            >
                                {logos.map((l) => (
                                    <SwiperSlide key={l.id}>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.1 }}
                                            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2.5 }}
                                        >
                                            <div className="iconstack">

                                            <div className="icon-wrap">
                                                <Image
                                                    className="iconlogo"
                                                    width={50}
                                                    height={50}
                                                    src={l.src}
                                                    alt={l.alt}
                                                />
                                                <p>{l.alt}</p>
                                            </div>
                                            </div>
                                        </motion.div>
                                        
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        
                        <div className="footer">
                            <div className="curriculum">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1 }}
                            >
                                <Link
                                    className="button"
                                    href="/pdf/select-this-Frontend-Dev.pdf"
                                    target='_blank'
                                    download='select-this-Frontend-Dev.pdf'
                                >
                                    <div className="bug">
                                        Download CV
                                    </div>
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                </Link>
                                </motion.div>
                            </div>
                            <div className="social">
                                {icons.map((i) => (
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 1 }}
                                        transition={{ duration: 0.1 }}
                                        key={i.href}
                                    >
                                        <Link
                                            className="button"
                                            href={i.href}
                                            target='_blank'
                                            rel='noreferrer'
                                            >
                                                
                                            <i className={i.classname}></i>
                                            
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <Link
                                        href="https://beta.talentprotocol.com/u/nextdoor"
                                        target='_blank'
                                        rel='noreferrer'
                                        className="talent-protocol"
                                    >
                                            T
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About