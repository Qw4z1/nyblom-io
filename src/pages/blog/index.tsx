import { GetStaticProps, NextPage } from "next";
import { Head } from "../../components/Head";
import Card from "../../components/Card";
import { getPostFrontMatter } from "../../helpers/getFrontMatter";
import { PostFrontMatter } from "../../types/posts";
import InlineNewsletterForm from "../../components/InlineNewsletterForm";
import { useState } from "react";
import { RssIcon } from "../../components/icons/RssSvg";

interface BlogListProps {
  posts: PostFrontMatter[];
}

const BlogList: NextPage<BlogListProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <>
      <Head
        title={"Blog"}
        description={"Thoughts on people, leadership and tech"}
      />
      <div className="w-full pb-11">
        <h1 className="text-black text-opacity-80 px-4">
          Thoughts on people, leadership and tech
        </h1>
        <p className="text-xl font-medium p-4">
          Each Friday, I share frameworks, stories, and actionable lessons from
          my 20 years of leading teams and companies. Get better at navigating
          hiring, delegation, and startup chaos to learn how to become effective
          leaders.
        </p>
        <div className="flex flex-row justify-between">
          <h2 className="p-4">All Posts</h2>
          <a
            className="w-10 h-10 hover:bg-yellow rounded-full no-underline hover:no-underline p-0 m-0 hover:p-0 hover:m-0"
            target="_blank"
            href="https://www.nyblom.io/rss.xml"
            rel="noopener noreferrer"
            aria-label="RSS feed"
          >
            <RssIcon />
          </a>
        </div>
        <div className="px-4 mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {filteredPosts.map((it) => (
          <Card
            title={it.title}
            key={it.slug}
            subtitle={it.excerpt}
            publishedDate={it.firstPublished}
            slug={it.slug}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const posts = await getPostFrontMatter();
  const publishedPosts = posts.filter((it) => it.published == true);
  return { props: { posts: publishedPosts }, revalidate: 60 };
};

export default BlogList;
