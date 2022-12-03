import { GetStaticProps, NextPage } from "next";
import { Head } from "../../components/Head";
import Card from "../../components/Card";
import { getPostFrontMatter } from "../../helpers/getFrontMatter";
import { PostFrontMatter } from "../../types/posts";

interface BlogListProps {
  posts: PostFrontMatter[];
}

const BlogList: NextPage<BlogListProps> = ({ posts }) => {
  return (
    <>
      <Head title={"Blog"} description={"Writings and ramblings"} />
      <div className="w-full pb-11">
        <h1 className="text-black text-opacity-80">
          A collection of my thoughts
        </h1>
        <blockquote>
          <p>&quot;I don&apos;t think to write. I write to think.&quot; </p>
        </blockquote>

        {posts.map((it) => (
          <Card
            title={it.title}
            key={it.slug}
            subtitle={it.excerpt}
            publishedDate={it.firstPublished}
            slug={it.slug}
            reads={it.reads}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const posts = await getPostFrontMatter();
  const publishedPosts = posts.filter((it) => it.published == true);
  return { props: { posts: publishedPosts } };
};

export default BlogList;
