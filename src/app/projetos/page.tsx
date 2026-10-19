import Image from "next/image";
import Link from "next/link";
import styles from "./projetos.module.css";

const projetos = [
    {
        slug: "projeto-wikirun",
        title: "Wiki Run",
        description: "Um jogo para navegar pela Wikipédia, clicando de link em link até chegar ao destino.",
        image: "/images/wikipedia.jpg",
        site: "https://wikigame-five.vercel.app",
        repo: "https://github.com/marcusdv/wikigame",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "NES.css", "Zod", "JWT", "API da Wikipédia", "Vercel"],
    },
];

export default function Projetos() {
    return (
        <>
            <h1>PROJETOS</h1>

            <div id={styles.projectsDiv}>
                {projetos.map((projeto) => (
                    <article key={projeto.slug}>
                        <picture>
                            <Link href={`/artigos/${projeto.slug}`}>
                                <Image src={projeto.image} alt={projeto.title} width={500} height={300} />
                            </Link>
                        </picture>
                        <div id="card-content">
                            <hgroup>
                                <Link href={`/artigos/${projeto.slug}`}>
                                    <h3>{projeto.title}</h3>
                                </Link>
                                <p>
                                    <a href={projeto.site} target="_blank" rel="noopener noreferrer">
                                        Jogar agora
                                    </a>
                                    {" · "}
                                    <a href={projeto.repo} target="_blank" rel="noopener noreferrer">
                                        Ver no GitHub
                                    </a>
                                </p>
                            </hgroup>

                            <p>{projeto.description}</p>
                        </div>
                        <ul className="tags">
                            {projeto.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </>
    );
}
