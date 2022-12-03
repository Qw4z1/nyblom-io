import { readFileSync, readdirSync } from "fs";
import { GetStaticProps, NextPage } from "next";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { join } from "path";
import getReadingTime from "reading-time";
import { PostFrontMatter, Post, ReadsQueryResult } from "../../types";
import { useMemo } from "react";
import { Head } from "../../components/Head";
import { HeaderImage } from "../../components/HeaderImage";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { useReads } from "../../hooks/useReads";
import PostMetaDataRow from "../../components/PostMetaDataRow";
import { getReads } from "../../helpers/getReads";

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
  
  const readCount = useReads(slug, reads, true);
  const BlogPost = useMemo(() => getMDXComponent(sourceCode), [sourceCode]);

  return (
    <>
      <Head title={title} description={excerpt} />
      <article>
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
  
  const url = process.env.NHOST_URL as string;
  const result: ReadsQueryResult = await getReads(url, { slug: slug });
  const reads = result.reads_by_pk.read_count;
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
        reads
      },
    },
  };
};

export default BlogPost;
