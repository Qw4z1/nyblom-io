import { GetStaticProps, NextPage } from "next";
import { Head } from "../../components/Head";
import Card from "../../components/Card";
import { getPostFrontMatter } from "../../helpers/getFrontMatter";
import { PostFrontMatter } from "../../types/posts";
import InlineNewsletterForm from "../../components/InlineNewsletterForm";

interface BlogListProps {
  posts: PostFrontMatter[];
}

const BlogList: NextPage<BlogListProps> = ({ posts }) => {
  return (
    <>
      <Head
        title={"Blog"}
        description={"Thoughts on people, tech and process"}
      />
      <div className="w-full pb-11">
        <h1 className="text-black text-opacity-80 px-4">
          Thoughts on people, leadership and tech
        </h1>
        <br />
        <p className="p-4">
          Every Friday, I share frameworks, stories, and actionable lessons from
          my 20 years of building apps, teams and companies.
        </p>
        <p className="p-4">Subscribe now to not miss the next one!</p>
        <br />
        <InlineNewsletterForm />
        <br />
        <h2 className="p-4">From the Archive</h2>
        {posts.map((it) => (
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
