import { readFileSync, readdirSync } from "fs";
import { GetStaticProps, NextPage } from "next";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { join } from "path";
import getReadingTime from "reading-time";
import { PostFrontMatter, Post } from "../../types";
import { useMemo } from "react";
import { Head } from "../../components/head";
import { HeaderImage } from "../../components/headerImage";

interface BlogPostProps {
  post: Post;
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  // Create string for publication date
  const publishedAt = useMemo(
    () =>
      new Date(post.firstPublished).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    [post.firstPublished]
  );

  const {
    title,
    subtitle,
    excerpt,
    slug,
    readingTime,
    sourceCode,
    featuredImage,
  } = post;

  const BlogPost = useMemo(() => getMDXComponent(sourceCode), [sourceCode]);

  return (
    <>
      <Head title={title} description={excerpt} />
      <article>
        {featuredImage ? <HeaderImage src={featuredImage} alt={"featured alt"} /> : null}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p className="text-base lg:text-lg">
          {publishedAt} · {readingTime} · ?? views
        </p>
        <BlogPost
        // components={{ Image: PostImage as any }}
        />
      </article>
    </>
  );
};

export async function getStaticPaths() {
  const fileNames = readdirSync(join(process.cwd(), "posts"));
  console.log("==== dir ", fileNames);

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
  const bundleResult = await bundleMDX({ source: mdxSource });

  const sourceCode = bundleResult.code;
  const frontMatter = bundleResult.frontmatter as PostFrontMatter;
  // const views = (await fetchDatabase<number>(`/views/${slug}`)) || 0;
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
