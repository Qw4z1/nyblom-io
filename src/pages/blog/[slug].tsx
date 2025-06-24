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
import PostNavigation from "../../components/PostNavigation";

interface BlogPostProps {
  post: Post;
  prevPost: { title: string; slug: string } | null;
  nextPost: { title: string; slug: string } | null;
}

const BlogPost: NextPage<BlogPostProps> = ({ post, prevPost, nextPost }) => {
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
        <PostNavigation prevPost={prevPost} nextPost={nextPost} />
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
  
  // Get all post files and sort them by date (assuming they have dates in frontmatter)
  const postsDirectory = join(process.cwd(), "posts");
  const allPostFiles = readdirSync(postsDirectory);
  
  // Read all posts to get their metadata for sorting
  const allPosts = await Promise.all(
    allPostFiles.map(async (fileName) => {
      const postSlug = fileName.replace(/\.mdx$/, "");
      const filePath = join(postsDirectory, fileName);
      const source = readFileSync(filePath, "utf8");
      
      // Minimal parsing to get the frontmatter
      const { frontmatter } = await bundleMDX({
        source,
        mdxOptions(options) {
          options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
          return options;
        },
      });
      
      return {
        slug: postSlug,
        title: (frontmatter as PostFrontMatter).title,
        firstPublished: (frontmatter as PostFrontMatter).firstPublished,
        published: (frontMatter as PostFrontMatter).published
      };
    })
  );
  
  // Sort posts by date (newest first)
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.firstPublished).getTime() - new Date(a.firstPublished).getTime();
  }).filter(it => it.published);
  
  // Find current post index
  const currentPostIndex = sortedPosts.findIndex((post) => post.slug === slug);
  
  // Get previous and next posts
  const prevPost = currentPostIndex < sortedPosts.length - 1 
    ? { title: sortedPosts[currentPostIndex + 1].title, slug: sortedPosts[currentPostIndex + 1].slug }
    : null;
    
  const nextPost = currentPostIndex > 0
    ? { title: sortedPosts[currentPostIndex - 1].title, slug: sortedPosts[currentPostIndex - 1].slug }
    : null;

  // Get the current post content
  const filePath = join(postsDirectory, `${slug}.mdx`);
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
      prevPost,
      nextPost,
    },
    revalidate: 60,
  };
};

export default BlogPost;
