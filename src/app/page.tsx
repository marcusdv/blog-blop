"use client";
import Header from "./components/ui/Header";
import Contato from "./components/ui/Contato";
import { PiArrowFatLinesUpBold } from "react-icons/pi";
import Footer from "./footer/page";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <main>
                <section id="introduction-section">
                    <picture>
                        <div id="quadrado-temporario"></div>
                    </picture>

                    <h1>
                        Olá, <br />
                        eu sou o Marcus!
                    </h1>
                    <p>
                        <a className="bold">Desenvolvedor Fullstack</a>, <a className="bold">Entusiasta de Vôlei</a>{" "}
                        vivendo em Salvador, Bahia!
                    </p>
                    <button>Baixar Currículo</button>
                </section>

                <section id="minhas-coisas-section">
                    <h2>Li, Vi, Assisti!</h2>

                    <ul>
                        <li>
                            <article>
                                <picture>
                                    <Image src={`/images/default.jpg`} alt="" width={500} height={300} />
                                </picture>
                                <div id="card-content">
                                    <hgroup>
                                        <Link href={""}>
                                            <h3>Temporario #983</h3>
                                        </Link>
                                        <p>
                                            <time dateTime="">Dezembro 10, 2026</time>
                                        </p>
                                    </hgroup>

                                    <p>delectus illo commodi iusto in necessitatibus nostrum vero hic, totam beatae</p>
                                </div>
                                <ul id="article-tags">
                                    <li> basd</li>
                                    <li>olasdkf</li>
                                    <li>açksd</li>
                                </ul>
                            </article>
                        </li>
                    </ul>
                </section>

                <section id="projetos-section">
                    <h2>ÚLTIMO PROJETO!</h2>

                    <ul>
                        <li>
                            <article>
                                <picture>
                                    <Image src={`/images/default.jpg`} alt="" width={600} height={600} />
                                </picture>
                                <div id="card-content">
                                    <hgroup>
                                        <Link href={""}>
                                            <h3>Temporario #983</h3>
                                        </Link>
                                        <p>
                                            <time dateTime="">Dezembro 10, 2026</time>
                                        </p>
                                    </hgroup>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique ipsam</p>
                                </div>
                                <ul id="article-tags">
                                    <li> basd</li>
                                    <li>olasdkf</li>
                                    <li>açksd</li>
                                </ul>
                            </article>
                        </li>
                    </ul>
                </section>
                {/* VOLTAR AO TOPO */}
                <div
                    id="voltar-ao-topo"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <p>Voltar ao topo</p>
                    <PiArrowFatLinesUpBold />
                </div>
            </main>
        </div>
    );
}
