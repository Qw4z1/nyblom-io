import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";
import { Head } from "../components/Head";
import SocialRow from "../components/SocialRow";
import { move } from "../helpers/array";
import { daysBetween } from "../helpers/date";
import { getPostFrontMatter } from "../helpers/getFrontMatter";
import { PostFrontMatter } from "../types/posts";

type HomeCard = PostFrontMatter & { isNew: boolean };

type HomeProps = {
  posts: HomeCard[];
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

  if (latestIndex > -1 && latest.isNew) {
    publishedPosts = move(publishedPosts, latestIndex, 0);
  } else if (latest.isNew) {
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
        <h1>Hi! 👋</h1>
        <div className="my-8">
          <p className="text-2xl font-medium">
            I&apos;m{" "}
            <strong><Link href="/about">Viktor Nyblom</Link></strong>.
          </p>
          <p className="text-2xl font-medium">
            Having spent a decade of building apps, teams and companies, I now focus on <strong><Link href="/nyblom-as-a-service/">helping others do the same</Link></strong>.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <SocialRow />
        </div>
        <h2 className="mt-14">Popular from the blog:</h2>
        <div className="pb-8 pt-2">
          {posts.map((it) => (
            <Card
              title={it.title}
              key={it.slug}
              subtitle={it.excerpt}
              publishedDate={it.firstPublished}
              slug={it.slug}
              reads={it.reads}
              isNew={it.isNew}
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
