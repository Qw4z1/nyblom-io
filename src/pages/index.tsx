import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import BookingButton from "../components/BookingButton";
import Card from "../components/Card";
import { Head } from "../components/Head";
import SocialRow from "../components/SocialRow";
import { move } from "../helpers/array";
import { daysBetween } from "../helpers/date";
import { getPostFrontMatter } from "../helpers/getFrontMatter";
import { PostFrontMatter } from "../types/posts";

type HomeCard = PostFrontMatter & { isNew: boolean };

type HomeProps = {
  posts: PostFrontMatter[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getPostFrontMatter();
  const cards = posts.map((it) => {
    return {
      isNew: false,
      ...it,
    } as HomeCard;
  });
  
  let publishedPosts = cards
    .filter((it) => it.published == true)
    .sort((a, b) => b.reads - a.reads)
    .slice(0, 5);
  
    const latest = cards.reduce((previous, current) =>
    previous.firstPublished < current.firstPublished ? current : previous
  );

  latest.isNew = daysBetween(latest.firstPublished, new Date()) < 7;
  const latestIndex = publishedPosts.findIndex((it) => it.slug === latest.slug);
  
  if (latestIndex > -1) {
    publishedPosts = move(publishedPosts, latestIndex, 0);
  } else {
    publishedPosts = [latest, ...publishedPosts];
  }

  return { props: { posts: publishedPosts }, revalidate: 60 };
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head
        title="NyblomIO"
        description="A decade of building apps, teams and companies."
      />
      <div className="max-w-2xl flex flex-col justify-start items-start m-auto pb-10">
        <h1>Hi!</h1>
        <div className="my-8">
          <p className="text-lg md:text-2xl">
            Welcome to the personal blog of{" "}
            <Link href="/about">Viktor Nyblom</Link>, where I share my thoughs from decade of building apps, teams and companies.
          </p>
          <p className="text-lg md:text-2xl">
            If you want to know what I&apos;m up to right now, checkout my{" "}
            <Link href="/now/">Now Page</Link>.
          </p>
          <p className="text-lg md:text-2xl">
            The source code for this website is available on{" "}
            <a href="https://github.com/Qw4z1/nyblom-io">GitHub</a>. PRs are
            welcome!
          </p>
        </div>
        <SocialRow />
        <h2 className="mt-14">Popular posts</h2>
        <div className="pb-8 pt-2">
          {posts.map((it, index) => (
            <Card
              title={it.title}
              key={it.slug}
              subtitle={it.excerpt}
              publishedDate={it.firstPublished}
              slug={it.slug}
              reads={it.reads}
              isNew={index === 0}
            />
          ))}
        </div>
        <Link
          className="text-xl w-full text-center p-2 hover:p-2 hover:m-0"
          href={"/blog"}
        >
          All posts
        </Link>
      </div>
    </>
  );
};

export default Home;
