import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { PostFrontMatter } from '../types';
// import { fetchDatabase } from './fetchDatabase';

export async function getPostFrontMatter(): Promise<PostFrontMatter[]> {
  const fileNames = readdirSync(join(process.cwd(), 'posts'));

  const allPosts: PostFrontMatter[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = join(process.cwd(), 'posts', fileName);
      const fileData = readFileSync(filePath, 'utf8');
      const frontMatter = matter(fileData).data as PostFrontMatter
      const slug = fileName.replace('.mdx', '');
      // const views = (await fetchDatabase<number>(`/views/${slug}`)) || 0;
      return { ...frontMatter, slug };
    })
  );

  const sortedPosts = allPosts.sort((a, b) =>
    a.firstPublished < b.firstPublished ? 1 : -1
  );

  return sortedPosts;
}