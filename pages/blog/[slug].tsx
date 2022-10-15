import { readFileSync, readdirSync, createReadStream } from "fs";
import { GetStaticProps, NextPage } from "next";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { join } from "path";
import getReadingTime from "reading-time";
import { PostFrontMatter, Post } from "../../types";
import { useMemo } from "react";
import { Head } from "../../components/head";
import { HeaderImage } from "../../components/headerImage";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { useReads } from "../../hooks/useReads";
import { createReads } from "../../helpers/createReads";
import PostMetaDataRow from "../../components/PostMetaDataRow";

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
    reads,
    featuredImage,
  } = post;

  const readCount = useReads(slug, reads);
  const BlogPost = useMemo(() => getMDXComponent(sourceCode), [sourceCode]);

  return (
    <>
      <Head title={title} description={excerpt} />
      <article className="mb-14">
        {featuredImage ? (
          <HeaderImage src={featuredImage} alt={"featured alt"} />
        ) : null}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <PostMetaDataRow
          publishedDate={firstPublished}
          readingTime={readingTime}
          readCount={readCount}
        />
        <BlogPost components={{ Link: Link }} />
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
  const url = process.env.NHOST_URL as string;
  await createReads(url, slug);

  const filePath = join(process.cwd(), "posts", `${slug}.mdx`);
  const mdxSource = readFileSync(filePath, "utf8");
  const bundleResult = await bundleMDX({
    source: mdxSource,
    xdmOptions(options) {
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
  };
};

export default BlogPost;
