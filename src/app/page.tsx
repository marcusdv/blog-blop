"use client";
import { PiArrowFatLinesUpBold } from "react-icons/pi";
import ArticlePreview from "./components/ArticlePreview";
import CoffeeHero from "./components/hero/CoffeeHero";
import { useBotaoPressionado } from "./hooks/useBotaoPressionado";

export default function Home() {
    const { pressionado, afundar } = useBotaoPressionado();

    return (
        <div>
            <main>
                <section id="introduction-section">
                    <CoffeeHero />

                    <div id="apresentacao">
                        <h1>
                            Olá, <br />
                            sou o Marcus!
                        </h1>
                        <p>
                            <a className="bold">Desenvolvedor Fullstack</a>, <a className="bold">Entusiasta de Vôlei</a>{" "}
                            vivendo em Salvador, Bahia!
                        </p>
                        <a
                            id="baixar-curriculo"
                            className={pressionado ? "pressionado" : undefined}
                            href="/pdfs/Marcus_Costa_Desenvolvedor_Fullstack.pdf"
                            download
                            onPointerDown={afundar}
                        >
                            Baixar Currículo
                        </a>
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
