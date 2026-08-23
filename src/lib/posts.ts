import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        content: marked(content) as string
      };
    });
}

export function getPostBySlug(slug: string): Post | null {
  const files = fs.readdirSync(postsDirectory);

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        content: marked(content) as string
      };
    }
  }

  return null;
}
