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
 * Returns all .mdx filenames
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
 * Read a single MDX file
 */
export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, "");

  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,

    title: data.title ?? "",

    description: data.description ?? "",

    date: data.date ?? "",

    author: data.author ?? "TES Apparels Team",

    category: data.category ?? "General",

    image: data.image ?? "/blog/default.jpg",

    tags: data.tags ?? [],

    readingTime: readingTime(content).text,

    content,
  };
}

/**
 * Get every blog post
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();

  const posts = slugs.map(getPostBySlug);

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}