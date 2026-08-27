// AQUI É O POST EM SÍ QUE TRANSOFRMA UM ARQUIVO .MD NUM POST ESTILIZADO

import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import styles from "../artigos.module.css";

function formatDate(dateString: string): string {
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    let date = new Date();

    // Tenta parseear formato YYYY-MM-DD
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

    return `${dia} de ${mes}, ${ano}`;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className={styles.post}>
            <picture>
                <a href=""></a>
            </picture>
            <div id="card-content">
                <hgroup>
                    <h3>{post.title}</h3>
                    <p>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </p>
                </hgroup>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <ul id="article-tags" className="flex gap-2">
                <li>#tabueleiro</li>
                <li>#vôlei</li>
                <li>#next</li>
                <li>#sql</li>
            </ul>
        </div>
    );
}
