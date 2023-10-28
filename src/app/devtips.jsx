import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Particle from './components/Particle.jsx'
import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'

import Chatgpt from '../public/Chat-GPT.png'
import DevMozzila from '../public/dev-mozzila.png'
import Freecodecamp from '../public/FreeCodeCamp.png'
import Codepen from '../public/Codepen.png'
import Cryptozombies from '../public/Cryptozombies.png'
import Remix from '../public/Remix.png'

export default function devtips() {

    const tips = [
        {
            id: 1,
            src: Chatgpt,
            alt: "Chat-GPT",
            title: "Chat-GPT",
            text: "Es una herramienta de inteligencia artificial con la que podés mantener conversaciones. Usalo como asistente virtual, hacele preguntas sobre diferentes temas y recibí respuestas que puedan ayudarte a entender conceptos de programación complejos, también puede ser una fuente de inspiración creativa.",
            web: 'https://openai.com/',
        },
        {
            id: 2,
            src: Freecodecamp,
            alt: "FreeCodeCamp",
            title: "FreeCodeCamp",
            text: "En esta plataforma interactiva con cursos gratuitos sobre desarrollo web y programación, aprendí lo necesario de HTML, CSS, JS y React para animarme a construir distintos proyectos.",
            web: 'https://www.freecodecamp.org/',
        },
        {
            id: 3,
            src: DevMozzila,
            alt: "DevMozzila",
            title: "MDN Web Docs",
            text: "Documentación completa sobre desarrollo web, incluyendo HTML, CSS y JavaScript. Nos ofrece guías sobre estas tecnologías incluyendo el uso de APIs, Accesibilidad y extensiones entre otras.",
            web: 'https://developer.mozilla.org/es/',
        },
        {
            id: 4,
            src: Codepen,
            alt: "Codepen",
            title: "Codepen",
            text: "Es un entorno de desarrollo social para diseñadores y desarrolladores front-end. Podes construir y probar código para probar características y animaciones, aprender, descubrir y compartir tu código",
            web: 'https://codepen.io/',
        },
        {
            id: 5,
            src: Cryptozombies,
            alt: "Cryptozombies",
            title: "Crypto Zombies",
            text: "Es una escuela interactiva que te enseña todos los aspectos técnicos de la blockchain. Aprendé de manera simple a codear contratos inteligentes creando tu propio juego de cripto-coleccionables.",
            web: 'https://cryptozombies.io/',
        },
        {
            id: 6,
            src: Remix,
            alt: "Remix",
            title: "Remix",
            text: "Remix es una plataforma en línea que te permite crear contratos inteligentes de forma simple. Estos contratos son acuerdos digitales seguros que se guardan en la blockchain, ofreciendo confiabilidad y transparencia.",
            web: 'https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js',
        },
    ];

    return (
        <section href="/devtips" className="devtips">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <Head>
                <title>Dev Tips!</title>
                <meta name="tips for frontend developer" content="Tips for IT people" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Particle />

            <Navbar />

            <div className="title">
                <p>Tips para mejorar como desarrollador</p>
            </div>
            <div className="dev-intro">
                <p>
                    La <span>Industria Tech</span>, un universo en constante evolución y desafío, 
                    nos impulsa a mantenernos en la cima de nuestras habilidades y conocimientos,
                    provocando una <span>adaptación y aprendizaje continuo </span>
                    en los entornos de trabajo y tecnologías de nuestro ambiente laboral.<br/>
                    En esta sección busco ayudar, quizás como me hubiese gustado que me digan en el pasado,
                    con <span>herramientas</span> que pueden acelerar nuestro <span>proceso de aprendizaje</span>,
                    logrando agregar valor al tiempo que invertimos en nuestro conocimiento dentro de la industria.
                </p>
            </div>

            <div>
                <div className="devprojects">
                    {tips.map((t) => (
                        <div key={t.id} className="individualproject">
                            <div className="imgproject">
                                <Image 
                                    src={t.src}
                                    alt={t.alt}
                                    height={200}
                                    width={400}
                                    className="img"
                                />
                            </div>
                            <div className="glassBox">
                                <div>
                                    <span>
                                        {t.title}
                                    </span>
                                        
                                </div>
                                <div className="devtext">
                                    {t.text}
                                </div>
                                <div className="socialdev">
                                    <Link
                                        className="button"
                                        href={t.web}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i> <div className="bug">{t.title}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />

        </section>
    )
}