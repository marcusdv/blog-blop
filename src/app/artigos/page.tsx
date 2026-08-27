import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./artigos.module.css";
import Image from "next/image";

function formatDate(dateString: string): string {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let date = new Date();

    // Tenta parsear formato YYYY-MM-DD
    if (dateString.includes("-") && dateString.split("-")[0].length === 4) {
        const [year, month, day] = dateString.split("-");
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }
    // Tenta parsear formato DD-MM-YYYY
    else if (dateString.includes("-")) {
        const [day, month, year] = dateString.split("-");
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();

    return `${dia} de ${mes} de ${ano}`;
}

export default function Artigos() {
    const posts = getAllPosts();

    return (
        <>
            <div id={styles.articlesDiv}>
                {posts.map((post) => (
                    <article key={post.slug}>
                        <picture>
                            <Link href={`/artigos/${post.slug}`}>
                                <Image src={post.image || "/images/default.jpg"} alt="" width={500} height={300} />
                            </Link>
                        </picture>
                        <div id="card-content">
                            <hgroup>
                                <Link href={`/artigos/${post.slug}`}>
                                    <h3>{post.title}</h3>
                                </Link>
                                <p>
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                </p>
                            </hgroup>

                            <p>{post.description}</p>
                        </div>
                        <ul id="article-tags">
                            {post.tags.map((tag) => (
                                <li key={tag}>
                                    <Link href={`/artigos/tags/${tag}`}>{tag}</Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </>
    );
}
