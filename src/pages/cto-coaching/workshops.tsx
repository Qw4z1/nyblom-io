import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Head } from "../../components/Head";
import { join } from "path";
import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import BookingButton from "../../components/BookingButton";
import CalLink from "../../components/CalLink";
import Testimonials from "../../components/testimonials/Testimonials";
import UL from "../../components/UL";
import { ContentFrontMatter } from "../../types";

interface Content {
  sourceCode: string;
}

interface WorkshopPageProps {
  content: Content;
}

const Workshop: NextPage<WorkshopPageProps> = ({ content }) => {
  const ContentItem = useMemo(
    () => getMDXComponent(content.sourceCode),
    [content.sourceCode]
  );

  return (
    <>
      <Head
        title={"Workshops"}
        description={
          "Hands-on strategy workshops to accelerate your team"
        }
      />
      <article className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">

        <ContentItem
          components={{
            Link: Link,
            ul: UL,
            BookingButton: BookingButton,
            CalLink: CalLink,
            Testimonials: Testimonials,
          }}
        />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps<WorkshopPageProps> = async () => {
  const filePath = join(process.cwd(), "content/workshops.mdx");
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

export default Workshop;
