import blogData from "@/content/blog.json";
import type { BlogDataFile, BlogPostDocument } from "@/types/blog";

const { posts } = blogData as BlogDataFile;

export function getAllPosts(): BlogPostDocument[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPostDocument | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  slug: string,
  relatedSlugs: string[],
  limit = 2,
): BlogPostDocument[] {
  const out: BlogPostDocument[] = [];
  for (const s of relatedSlugs) {
    if (s === slug) continue;
    const p = getPostBySlug(s);
    if (p) out.push(p);
    if (out.length >= limit) break;
  }
  if (out.length < limit) {
    for (const p of posts) {
      if (p.slug === slug || out.some((x) => x.slug === p.slug)) continue;
      out.push(p);
      if (out.length >= limit) break;
    }
  }
  return out.slice(0, limit);
}
