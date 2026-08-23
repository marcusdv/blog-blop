import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Artigos() {
    const posts = getAllPosts();

    return (
        <>
            <h1>ARTIGOS</h1>
            <div>
                {posts.map(post => (
                    <article key={post.slug}>
                        <Link href={`/artigos/${post.slug}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.description}</p>
                        <time>{post.date}</time>
                    </article>
                ))}
            </div>
        </>
    );
}
