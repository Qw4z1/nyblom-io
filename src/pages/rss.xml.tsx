import type { GetServerSideProps } from "next";
import { getPostFrontMatter } from "../helpers/getFrontMatter";
import { PostFrontMatter } from "../types";

// Empty page, since getServerSideProps returns the xml we want to return.
const Rss = () => {};

const buildXml = (posts: PostFrontMatter[]) => {
  const postXml = posts
    .filter((it) => !!it.published)
    .map((page) => {
      const url = `${process.env.NEXT_PUBLIC_ROOT_URL}/blog/${page.slug}`;
      return `<item>
      <title>${page.title}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${page.firstPublished}</pubDate>
      <description>${page.excerpt}</description>
    </item>`;
    })
    .join("");

  // TODO: Maybe add content in the future?
  // <content:encoded><![CDATA[${page.content}]]></content:encoded>
  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
  <title>NyblomIO</title>
  <description>A decade of building apps, teams and companies.</description>
  <link>https://www.nyblom.io</link>
  <lastBuildDate>${posts[0].firstPublished}</lastBuildDate>
  ${postXml}
  </channel>
  </rss>`;
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

export default Rss;
