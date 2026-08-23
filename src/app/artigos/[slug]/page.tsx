import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link href="/artigos">← Voltar</Link>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      {post.image && <img src={post.image} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
