import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./artigos.module.css";
import Image from "next/image";

export default function Artigos() {
    const posts = getAllPosts();

    return (
        <>
            <div id={styles.articlesDiv}>
                {posts.map((post) => (
                    <article key={post.slug}>
                        <picture>
                            <Image src={`/images/default.jpg`} alt="" width={500} height={300} />
                        </picture>
                        <div id="card-content">
                            <hgroup>
                                <Link href={`/artigos/${post.slug}`}>
                                    <h3>{post.title}</h3>
                                </Link>
                                <p>
                                    <time dateTime="">Dezembro 10, 2026</time>
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
