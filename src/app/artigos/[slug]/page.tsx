import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
