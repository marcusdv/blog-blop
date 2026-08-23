import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import styles from "../artigos.module.css";

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
        <article className={styles.post}>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint soluta error, dolore distinctio
                    nisi sapiente dolor, ipsam reiciendis consequatur ratione, possimus ea.
                </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <ul id="article-tags">
                <li>#tabueleiro</li>
                <li>#vôlei</li>
                <li>#next</li>
                <li>#sql</li>
            </ul>
        </article>
    );
}
