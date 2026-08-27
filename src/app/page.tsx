"use client";
import Header from "./components/header/Header";
import Contato from "./components/contato/Contato";
import { PiArrowFatLinesUpBold } from "react-icons/pi";
import Footer from "./components/footer/page";
import Link from "next/link";
import Image from "next/image";
import ArticlePreview from "./components/ArticlePreview";

export default function Home() {
    return (
        <div>
            <main>
                <section id="introduction-section">
                    <picture>
                        <div id="quadrado-temporario"></div>
                    </picture>

                    <div id="apresentacao">
                        <h1>
                            Olá, <br />
                            sou o Marcus!
                        </h1>
                        <p>
                            <a className="bold">Desenvolvedor Fullstack</a>, <a className="bold">Entusiasta de Vôlei</a>{" "}
                            vivendo em Salvador, Bahia!
                        </p>
                        <button>Baixar Currículo</button>
                    </div>
                </section>

                <section id="minhas-coisas-section">
                    <h2>Li, Vi, Assisti!</h2>

                    <ul>
                        <li>
                            <ArticlePreview slug="li-vi-assisti-1" />
                        </li>
                    </ul>
                </section>

                <section id="projetos-section">
                    <h2>ÚLTIMO PROJETO!</h2>

                    <ul>
                        <li>
                            <ArticlePreview slug="projeto-wikirun" />
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
