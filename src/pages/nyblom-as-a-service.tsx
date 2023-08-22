import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Head } from "../components/Head";
import { join } from "path";
import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import { Content, ContentFrontMatter } from "../types";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import UL from "../components/UL";
import BookingButton from "../components/BookingButton";
import Image from "next/image";
import CalLink from "../components/CalLink";

interface NaaSPageProps {
  content: Content;
}

const NaaS: NextPage<NaaSPageProps> = ({ content }) => {
  const ContentItem = useMemo(
    () => getMDXComponent(content.sourceCode),
    [content.sourceCode]
  );

  return (
    <>
      <Head
        title={"Nyblom as a Service"}
        description={
          "Hire me as a Fractional CTO and strategic technology partner."
        }
      />
      <article className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">
        <div className="content-center w-full">
          <Image
            src={"/images/twitterhead-large.png"}
            alt={"Picture of Viktor Nyblom"}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <ContentItem
          components={{ Link: Link, ul: UL, BookingButton: BookingButton, CalLink: CalLink }}
        />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps<NaaSPageProps> = async () => {
  const filePath = join(process.cwd(), "content/naas.mdx");
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

export default NaaS;
