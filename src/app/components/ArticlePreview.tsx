"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getArticleData } from "@/app/actions/getArticleData";

interface ArticlePreviewProps {
    slug: string;
}

interface Article {
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
}

function formatDate(dateString: string): string {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let date = new Date();

    if (dateString.includes("-") && dateString.split("-")[0].length === 4) {
        const [year, month, day] = dateString.split("-");
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else if (dateString.includes("-")) {
        const [day, month, year] = dateString.split("-");
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();

    return `${dia} de ${mes} de ${ano}`;
}

export default function ArticlePreview({ slug }: ArticlePreviewProps) {
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadArticle() {
            try {
                const data = await getArticleData(slug);
                setArticle(data);
            } catch (error) {
                console.error("Erro ao carregar artigo:", error);
            } finally {
                setLoading(false);
            }
        }

        loadArticle();
    }, [slug]);

    if (loading) {
        return <div>Carregando artigo...</div>;
    }

    if (!article) {
        return <div>Artigo não encontrado</div>;
    }

    return (
        <article>
            <picture>
                <Link href={`/artigos/${slug}`}>
                    <Image src={article.image || "/images/default.jpg"} alt={article.title} width={500} height={300} />
                </Link>
            </picture>
            <div id="card-content">
                <hgroup>
                    <Link href={`/artigos/${slug}`}>
                        <h3>{article.title}</h3>
                    </Link>
                    <p>
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                    </p>
                </hgroup>

                <p>{article.description}</p>
            </div>
            <ul id="article-tags">
                {article.tags.map((tag) => (
                    <li key={tag}>
                        <Link href={`/artigos/tags/${tag}`}>{tag}</Link>
                    </li>
                ))}
            </ul>
        </article>
    );
}
