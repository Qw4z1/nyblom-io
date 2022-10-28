import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { PostFrontMatter, QueryResult } from "../types";
import { createReads } from "./createReads";
import { getReads } from "./getReads";

export async function getPostFrontMatter(): Promise<PostFrontMatter[]> {
  const fileNames = readdirSync(join(process.cwd(), "posts"));

  const allPosts: PostFrontMatter[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = join(process.cwd(), "posts", fileName);
      const fileData = readFileSync(filePath, "utf8");
      const frontMatter = matter(fileData).data as PostFrontMatter;
      const slug = fileName.replace(".mdx", "");
      const url = process.env.NHOST_URL as string;
      await createReads(url, slug) // Ensure reads variable exists
      const result: QueryResult = await getReads(url, { slug: slug });
      const reads = result.reads_by_pk.read_count;
      return { ...frontMatter, slug, reads };
    })
  );

  const sortedPosts = allPosts.sort((a, b) =>
    a.firstPublished < b.firstPublished ? 1 : -1
  );

  return sortedPosts;
}
