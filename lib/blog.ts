import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  readingTime: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

/**
 * Get all MDX blog filenames.
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

/**
 * Get a single blog post by slug.
 */
export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, "");

  const fullPath = path.join(
    postsDirectory,
    `${realSlug}.mdx`
  );

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post not found: ${realSlug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "TES Apparels Team"),
    category: String(data.category ?? "General"),
    image: String(data.image ?? "/blog/default.jpg"),
    tags: Array.isArray(data.tags)
      ? data.tags.map(String)
      : [],
    readingTime: readingTime(content).text,
    content,
  };
}

/**
 * Get every blog post.
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) =>
    getPostBySlug(slug.replace(/\.mdx$/, ""))
  );

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}