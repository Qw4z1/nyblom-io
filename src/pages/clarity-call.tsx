import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Head } from "../components/Head";
import { join } from "path";
import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import MdxContent from "../components/MdxContent";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import BookingButton from "../components/BookingButton";
import CalLink from "../components/CalLink";
import Testimonials from "../components/testimonials/Testimonials";
import UL from "../components/UL";
import { ContentFrontMatter } from "../types";

interface Content {
  sourceCode: string;
}

interface NaaSPageProps {
  content: Content;
}

const NaaS: NextPage<NaaSPageProps> = ({ content }) => {

  return (
    <>
      <Head
        title={"Clarity Call"}
        description={
          "Get clear on your most important thing and take massive action"
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

        <MdxContent
          code={content.sourceCode}
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

export const getStaticProps: GetStaticProps<NaaSPageProps> = async () => {
  const filePath = join(process.cwd(), "content/clarity-call.mdx");
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
