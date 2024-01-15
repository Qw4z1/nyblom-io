import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { join } from "path";
import { useMemo } from "react";
import remarkGfm from "remark-gfm";
import { Head } from "../components/Head";
import { Content, ContentFrontMatter, PostFrontMatter } from "../types";
import { getPostFrontMatter } from "../helpers/getFrontMatter";
import MdxPostList from "../components/MdxPostList";
import UL from "../components/UL";

interface NowPageProps {
  content: Content & { posts: PostFrontMatter[] };
}

const Now: NextPage<NowPageProps> = ({ content }) => {
  const lastUpdated = useMemo(
    () =>
      new Date(content.lastUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    [content.lastUpdated]
  );

  const ContentItem = useMemo(
    () => getMDXComponent(content.sourceCode),
    [content.sourceCode]
  );

  const postList = <MdxPostList posts={content.posts} />;

  return (
    <>
      <Head title={"Now"} description={"What is Viktor up to Now?"} />
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto list-disc ">
        <h1>Now</h1>
        <p className="text-base lg:text-lg">Last updated: {lastUpdated}</p>
        <ContentItem
          components={{ Link: Link, ul: UL, PostList: () => postList }}
        />
        <p className="pt-2 pb-4">
          If you want to get in touch with me, feel free to use any of the
          channels below. 👇
        </p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<NowPageProps> = async () => {
  const filePath = join(process.cwd(), "content/now.mdx");
  const mdxSource = readFileSync(filePath, "utf8");
  const bundleResult = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      return options;
    },
  });

  const sourceCode = bundleResult.code;
  const frontMatter = bundleResult.frontmatter as ContentFrontMatter;

  const posts = await getPostFrontMatter();
  const postsThisYear = posts.filter(
    (it) => it.published == true && it.firstPublished > "2024-01-01"
  );

  return {
    props: {
      content: {
        ...frontMatter,
        sourceCode,
        posts: postsThisYear,
      },
    },
  };
};
export default Now;
