import { GetStaticProps, NextPage } from "next";
import Card from "../../components/card";
import { getPostFrontMatter } from "../../helpers/getFrontMatter";
import { PostFrontMatter } from "../../types/posts";

interface BlogListProps {
  posts: PostFrontMatter[];
}

const BlogList: NextPage<BlogListProps> = ({ posts }) => {
  return (
    <div className="container">
      <div>
        <h1>A collection of my thoughts</h1>
        <blockquote>
          <p>"I don't think to write. I write to think." </p>
        </blockquote>

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
    </div>
  );
};

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const posts = await getPostFrontMatter();
  return { props: { posts } };
};

export default BlogList;
