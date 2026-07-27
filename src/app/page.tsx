import Header from "./components/ui/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <section id="introduction-section">
                    <picture>
                        <div id="quadrado-temporario"></div>
                    </picture>

                    <h1>E aí, sou o Marcus!</h1>
                    <p>
                        <a className="bold">Desenvolvedor Fullstack</a>, <a className="bold">Entusiasta de Vôlei</a>{" "}
                        vivendo em Salvador, Bahia!
                    </p>
                </section>
            </main>
        </div>
    );
}
