import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { ContentFrontMatter, PostFrontMatter, SluggedContent } from "../types";

export async function getPostFrontMatter(): Promise<PostFrontMatter[]> {
  const fileNames = readdirSync(join(process.cwd(), "posts"));

  const allPosts: PostFrontMatter[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = join(process.cwd(), "posts", fileName);
      const fileData = readFileSync(filePath, "utf8");
      const frontMatter = matter(fileData).data as PostFrontMatter;
      const slug = fileName.replace(".mdx", "");
      return { ...frontMatter, slug };
    })
  );

  const sortedPosts = allPosts.sort((a, b) =>
    a.firstPublished < b.firstPublished ? 1 : -1
  );

  return sortedPosts;
}

export async function getContentFrontMatter(): Promise<SluggedContent[]> {
  const fileNames = readdirSync(join(process.cwd(), "content"));

  const allPosts: SluggedContent[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = join(process.cwd(), "content", fileName);
      const fileData = readFileSync(filePath, "utf8");
      const frontMatter = matter(fileData).data as ContentFrontMatter;
      const slug = fileName.replace(".mdx", "");
      return { ...frontMatter, slug };
    })
  );
  return allPosts;
}
