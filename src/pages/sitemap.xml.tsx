import { GetServerSideProps } from "next/types";
import { getPostFrontMatter } from "../helpers/getFrontMatter";
import { PostFrontMatter } from "../types";

function buildXml(posts: PostFrontMatter[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${process.env.NEXT_PUBLIC_ROOT_URL}/</loc>
       <lastmod>2023-01-29</lastmod>
     </url>
     <url>
       <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/blog/`}</loc>
       <lastmod>2023-01-29</lastmod>
     </url>
     <url>
       <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/books/`}</loc>
       <lastmod>2023-01-29</lastmod>
     </url>
     <url>
       <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/about/`}</loc>
       <lastmod>2023-01-29</lastmod>
     </url>
     <url>
       <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/now/`}</loc>
       <lastmod>2023-01-29</lastmod>
     </url>
     <url>
       <loc>${`${process.env.NEXT_PUBLIC_ROOT_URL}/portfolio/`}</loc>
       <lastmod>2023-01-29</lastmod>
     </url>
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
  const rss = buildXml(posts);

  // Set headers and send XML instead of page.
  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
