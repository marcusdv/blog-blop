"use server";

import { getPostBySlug } from "@/lib/posts";

export async function getArticleData(slug: string) {
    const post = getPostBySlug(slug);

    if (!post) {
        return null;
    }

    return {
        title: post.title,
        date: post.date,
        description: post.description,
        image: post.image,
        tags: post.tags,
    };
}
