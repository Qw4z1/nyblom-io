import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";
import { Head } from "../components/Head";
import SocialRow from "../components/SocialRow";
import { getPostFrontMatter } from "../helpers/getFrontMatter";
import { PostFrontMatter } from "../types/posts";

type HomeProps = {
  posts: PostFrontMatter[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getPostFrontMatter();
  const publishedPosts = posts
    .filter((it) => it.published == true)
    .sort((a, b) => b.reads - a.reads)
    .slice(0, 5);
  return { props: { posts: publishedPosts }, revalidate: 60 };
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head
        title="NyblomIO"
        description="Entrepreneur. Angel Investor. Tech Advisor."
      />
      <div className="max-w-2xl flex flex-col justify-start items-start m-auto pb-10">
        <h1>Hi!</h1>
        <div className="my-8">
          <p className="text-lg md:text-2xl">
            Welcome to the personal blog of{" "}
            <Link href="/about">Viktor Nyblom</Link>.
            <br />
            Stockholm based entrepreneur, investor and startup advisor.
          </p>
          <p className="text-lg md:text-2xl">
            I do many different things during the course of a year. But if you
            want to know what I&apos;m doing right now, checkout my{" "}
            <Link href="/now/">Now Page</Link>.
          </p>
          <p className="text-lg md:text-2xl">
            This website is hosted on Vercel and the source code is available on{" "}
            <a href="https://github.com/Qw4z1/nyblom-io">GitHub</a>. PRs are
            welcome!
          </p>
        </div>
        <SocialRow />
        <h2 className="mt-12">Popular posts</h2>
        <div className="pb-8 pt-2">
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
        <Link className="text-xl w-full text-center p-2 hover:p-2 hover:m-0" href={"/blog"}>
          All posts
        </Link>
      </div>
    </>
  );
};

export default Home;
