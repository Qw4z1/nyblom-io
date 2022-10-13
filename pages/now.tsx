import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticProps, NextPage } from "next";
import { join } from "path";
import { useMemo } from "react";
import remarkGfm from "remark-gfm";
import { Head } from "../components/head";
import { Content, ContentFrontMatter } from "../types";
interface NowPageProps {
  content: Content;
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

  return (
    <>
      <Head title={"Now"} description={"What is Viktor up to Now?"} />
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">
        <h1>Now</h1>
        <p className="text-base lg:text-lg">Last updated: {lastUpdated}</p>
        <ContentItem />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<NowPageProps> = async ({
  params,
}) => {
  const filePath = join(process.cwd(), "content/now.mdx");
  const mdxSource = readFileSync(filePath, "utf8");
  const bundleResult = await bundleMDX({
    source: mdxSource,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      return options;
    },
  });

  const sourceCode = bundleResult.code;
  const frontMatter = bundleResult.frontmatter as ContentFrontMatter;

  return {
    props: {
      content: {
        ...frontMatter,
        sourceCode,
      },
    },
  };
};
export default Now;
