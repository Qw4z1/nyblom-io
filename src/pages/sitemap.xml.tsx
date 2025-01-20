import { GetServerSideProps } from "next/types";
import {
  getContentFrontMatter,
  getPostFrontMatter,
} from "../helpers/getFrontMatter";
import { PostFrontMatter, SluggedContent } from "../types";

function getLastPostDate(posts: PostFrontMatter[]): string {
  return posts
    .filter((it) => !!it.published)
    .reduce((latestDate, post) => {
      const postDate = post.firstPublished;
      return postDate > latestDate ? postDate : latestDate;
    }, "2020-01-01");
}

function buildXml(posts: PostFrontMatter[], content: SluggedContent[]) {
  const lastPostDate = getLastPostDate(posts);
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${process.env.NEXT_PUBLIC_ROOT_URL}/</loc>
       <lastmod>2025-01-20</lastmod>
     </url>
     <url>
       <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/blog/`}</loc>
       <lastmod>${lastPostDate}</lastmod>
     </url>
     <url>
     <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/books/`}</loc>
     <lastmod>2023-10-15</lastmod>
    </url>
    <url>
      <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/portfolio/`}</loc>
      <lastmod>2024-08-21</lastmod>
    </url>
    <url>
      <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/newsletter/`}</loc>
      <lastmod>2024-08-23</lastmod>
    </url>
    ${content
      .map(({ slug, lastUpdated }) => {
        return `
      <url>
        <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/${slug}/`}</loc>
        <lastmod>${lastUpdated}</lastmod>
      </url>`;
      })
      .join("")}
     ${posts
       .filter((it) => !!it.published)
       .map(({ slug, lastUpdated }) => {
         return `
       <url>
           <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/blog/${slug}`}</loc>
           <lastmod>${lastUpdated}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getPostFrontMatter();
  const content = await getContentFrontMatter();
  const rss = buildXml(posts, content);

  // Set headers and send XML instead of page.
  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
