"use client";
import Header from "./components/ui/Header";
import Contato from "./components/ui/Contato";
import { PiArrowFatLinesUpBold } from "react-icons/pi";

export default function Home() {
    return (
        <div>
            <Header />
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
                                    <a href=""></a>
                                </picture>
                                <div id="card-content">
                                    <hgroup>
                                        <h3>Titulo h3 #879</h3>
                                        <p>
                                            <time dateTime="">Dezembro 10, 2026</time>
                                        </p>
                                    </hgroup>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint soluta
                                        error, dolore distinctio nisi sapiente dolor, ipsam reiciendis consequatur
                                        ratione, possimus ea.
                                    </p>
                                </div>
                                <ul id="article-tags">
                                    <li>#tabueleiro</li>
                                    <li>#vôlei</li>
                                    <li>#next</li>
                                    <li>#sql</li>
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
                                    <a href=""></a>
                                </picture>
                                <div id="card-content">
                                    <hgroup>
                                        <h3>Titulo h3 #879</h3>
                                        <p>
                                            <time dateTime="">Dezembro 10, 2026</time>
                                        </p>
                                    </hgroup>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint soluta
                                        error, dolore distinctio nisi sapiente dolor, ipsam reiciendis consequatur
                                        ratione, possimus ea.
                                    </p>
                                </div>
                                <ul id="article-tags">
                                    <li>#tabueleiro</li>
                                    <li>#vôlei</li>
                                    <li>#next</li>
                                    <li>#sql</li>
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
            <Contato />
            <footer>
                <p>Marcus Oliveira ©</p>
            </footer>
        </div>
    );
}
