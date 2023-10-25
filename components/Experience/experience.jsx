import Image from 'next/image'

import Link from 'next/link'

import Nof from 'public/experience/nof.png'
import Speezard from 'public/experience/SpeezardProject.png'
import Clock from 'public/experience/project7.png'

function Experience() {

    const projects = [
        {
            id: 1,
            src: Speezard,
            alt: "Speezard project",
            title: "Speezard",
            text: "Pre-aceleradora web3 que ofrece una plataforma integral para startups. Con más de 15 proyectos iniciados y una comunidad de más de 700 cracks de IT, este proyecto se convirtió en una herramienta esencial para impulsar el crecimiento y desarrollo de emprendimientos emergentes en el ecosistema Web3.",
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
            id: 2,
            src: Nof,
            alt: "Nof project",
            title: "Number One Fan",
            text: "NOF es un proyecto web3 que combina juegos y coleccionismo de álbumes NFTs con estilo PixelArt. Los jugadores adquieren álbumes NFTs exclusivos, ganan recompensas y construyen su colección. La comunidad de NOF cuenta con más de 450 miembros en Discord y ofrece la posibilidad de comprar/vender coleccionables en OpenSea.",
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
            <div className="projects">
                

                {projects.map((p) => (
                    <div key={p.id} className="individualproject">
                        <div className="imgproject">
                            <Image 
                                src={p.src}
                                alt={p.alt}
                                height={200}
                                width={400}
                                className="img"
                            />
                        </div>
                        <div className="glassBox">
                            <div>
                                <span>
                                    {p.title} :
                                </span>
                                    
                            </div>
                            <div>
                                {p.text}
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
                ))}
                
            </div>
        </div>
    </section>
    )
}

export default Experience