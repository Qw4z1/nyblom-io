import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { join } from "path";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo } from "react";
import remarkGfm from "remark-gfm";
import { Head } from "../components/Head";
import { Content, ContentFrontMatter } from "../types";
interface NowPageProps {
  content: Content;
}

const UL: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = (props) => {
  return <ul className="space-y-2 list-disc list-inside">{props.children}</ul>;
};

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
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto list-disc ">
        <h1>Now</h1>
        <p className="text-base lg:text-lg">Last updated: {lastUpdated}</p>
        <ContentItem components={{ Link: Link, ul: UL }} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<NowPageProps> = async () => {
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
