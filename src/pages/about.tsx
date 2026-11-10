import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Head } from "../components/Head";
import { join } from "path";
import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import MdxContent from "../components/MdxContent";
import remarkGfm from "remark-gfm";
import { Content, ContentFrontMatter } from "../types";
import UL from "../components/UL";

interface AboutPageProps {
  content: Content;
}

const About: NextPage<AboutPageProps> = ({ content }) => {

  return (
    <>
      <Head
        title={"About"}
        description={"Viktor Nyblom | Coder, Coach and Catalyst"}
      />
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">
        <article>
          <MdxContent code={content.sourceCode} components={{ Link: Link, ul: UL }} />
        </article>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const filePath = join(process.cwd(), "content/about.mdx");
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

  return {
    props: {
      content: {
        ...frontMatter,
        sourceCode,
      },
    },
  };
};

export default About;
