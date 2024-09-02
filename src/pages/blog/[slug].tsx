import { readFileSync, readdirSync } from "fs";
import { GetStaticProps, NextPage } from "next";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { join } from "path";
import getReadingTime from "reading-time";
import { PostFrontMatter, Post } from "../../types";
import { useMemo } from "react";
import { Head } from "../../components/Head";
import { HeaderImage } from "../../components/HeaderImage";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import PostMetaDataRow from "../../components/PostMetaDataRow";
import MdxTable from "../../components/MdxTable";
import { Announcement } from "../../components/announcement";

interface BlogPostProps {
  post: Post;
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  const {
    title,
    subtitle,
    excerpt,
    firstPublished,
    slug,
    readingTime,
    sourceCode,
    featuredImage,
  } = post;

  const MDXPost = useMemo(() => getMDXComponent(sourceCode), [sourceCode]);

  return (
    <>
      <Head
        type={"post"}
        title={title}
        description={excerpt}
        readTime={readingTime}
        publishDate={firstPublished}
        subTitle={subtitle}
      />
      <article className="pb-16 pt-4 md:pb-32">
        <header>
          {featuredImage ? (
            <HeaderImage src={featuredImage} alt={"featured alt"} />
          ) : null}
          <h1>{title}</h1>
          {subtitle && (
            <p className="text-xl font-bold pt-4 pb-2 m-0 text-gray-800">
              {subtitle}
            </p>
          )}
          <PostMetaDataRow
            publishedDate={firstPublished}
            readingTime={readingTime}
          />
        </header>
        <MDXPost components={{ Link: Link, MdxTable: MdxTable }} />
        <Announcement />
      </article>
    </>
  );
};

export async function getStaticPaths() {
  const fileNames = readdirSync(join(process.cwd(), "posts"));

  return {
    paths: fileNames.map((fileName) => ({
      params: {
        slug: fileName.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params!.slug as string;

  const filePath = join(process.cwd(), "posts", `${slug}.mdx`);
  const mdxSource = readFileSync(filePath, "utf8");
  const bundleResult = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      return options;
    },
  });

  const sourceCode = bundleResult.code;
  const frontMatter = bundleResult.frontmatter as PostFrontMatter;
  const readingTimeResult = getReadingTime(mdxSource);
  const wordCount = readingTimeResult.words;
  const readingTime = readingTimeResult.text;

  return {
    props: {
      post: {
        ...frontMatter,
        slug,
        wordCount,
        readingTime,
        sourceCode,
      },
    },
    revalidate: 60,
  };
};

export default BlogPost;
