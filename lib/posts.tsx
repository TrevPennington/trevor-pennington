import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostMeta = {
  title: string;
  date: string;
  folder: string;
};

export type PostSummary = {
  id: string;
} & PostMeta;

export type PostData = {
  slug: string;
  content: string;
} & PostMeta;

export function getSortedPostsData(): PostSummary[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const metadata = matterResult.data as PostMeta;

    // Combine the data with the id
    return {
      id,
      ...metadata,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const metadata = matterResult.data as PostMeta;

  return {
    slug,
    content: matterResult.content,
    ...metadata,
  };
}
