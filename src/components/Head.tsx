import NextHead from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { buildOgImageUrl } from "../helpers/buildOgImageUrl";

interface HeadProps {
  type?: "post" | "page";
  title: string;
  description: string;
  subTitle?: string;
  publishDate?: string;
  readTime?: string;
  reads?: number;
}

export const Head: FC<HeadProps> = ({
  title,
  type = "page",
  description,
  publishDate,
  readTime,
  subTitle,
}) => {
  const router = useRouter();

  const ogImgUrl = buildOgImageUrl({
    type,
    title,
    description,
    publishDate,
    readTime,
    subTitle,
  });

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_ROOT_URL}${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_ROOT_URL}${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NyblomIO" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:title" content={title} key="title" />

      <meta name="og:image" content={ogImgUrl} />
      <meta property="og:image:type" content={"image/png"} />
      <meta property="og:image:width" content={"1200"} />
      <meta property="og:image:height" content={"630"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qw4z1" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={ogImgUrl} />
      <meta name="twitter:description" content={description} />
    </NextHead>
  );
};
