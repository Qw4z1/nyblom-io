import { ImageResponse } from "next/og";
import type { NextApiRequest, NextApiResponse } from "next";

import { readFile } from "fs/promises";
import { join } from "path";

const loadFont = (file: string) =>
  readFile(join(process.cwd(), "fonts", file));

const extraBold = loadFont("Montserrat-ExtraBold.ttf");
const semiBold = loadFont("Montserrat-SemiBold.ttf");
const bold = loadFont("Montserrat-Bold.ttf");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchParams } = new URL(req.url ?? "/", "http://localhost");

  const image =
    searchParams.get("type") === "post"
      ? await Post(searchParams)
      : await Generic(searchParams);

  res.setHeader("Content-Type", "image/png");
  res.setHeader(
    "Cache-Control",
    image.headers.get("Cache-Control") ?? "public, max-age=31536000, immutable"
  );
  res.status(200).send(Buffer.from(await image.arrayBuffer()));
}

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => (
  <div tw="flex flex-col w-full h-full border border-[6] border-white bg-[#ffde03] p-16 justify-center">
    {children}
  </div>
);

const Post = async (searchParams: URLSearchParams) => {
  const title = searchParams.get("title");
  const publishDate = searchParams.get("publishDate");
  const readTime = searchParams.get("readTime");
  const subTitle = searchParams.get("subTitle");

  const extraBoldData = await extraBold;
  const semiBoldData = await semiBold;
  const boldData = await bold;

  let publishedAt = "";
  if (publishDate) {
    publishedAt = new Date(publishDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return new ImageResponse(
    (
      <Wrapper>
        <div tw="flex flex-row justify-between">
          <div
            tw="flex flex-row text-base font-light lg:text-lg italic"
            style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 30 }}
          >
            {publishedAt} · {readTime}
          </div>
        </div>
        <div
          style={{
            fontFamily: '"Montserrat"',
            fontWeight: 800,
            fontSize: 100,
            lineHeight: "90%",
          }}
        >
          {title}
        </div>
        <p style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 40 }}>
          {subTitle}
        </p>
      </Wrapper>
    ),
    {
      fonts: [
        {
          name: "Montserrat",
          weight: 600,
          data: semiBoldData,
          style: "normal",
        },
        {
          name: "Montserrat",
          weight: 700,
          data: boldData,
          style: "normal",
        },
        {
          name: "Montserrat",
          weight: 800,
          data: extraBoldData,
          style: "normal",
        },
      ],
    }
  );
};

const Generic = async (searchParams: URLSearchParams) => {
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const extraBoldData = await extraBold;
  const semiBoldData = await semiBold;
  const boldData = await bold;

  return new ImageResponse(
    (
      <Wrapper>
        <div tw="flex flex-col w-full justify-center items-center">
          <div
            tw="font-bold mb-1 text-center"
            style={{
              fontFamily: '"Montserrat"',
              fontWeight: 800,
              fontSize: 170,
              lineHeight: "90%",
            }}
          >
            {title}
          </div>
          <p
            tw="mt-8 max-w-screen-sm text-center"
            style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 45 }}
          >
            {description}
          </p>
        </div>
      </Wrapper>
    ),
    {
      fonts: [
        {
          name: "Montserrat",
          weight: 600,
          data: semiBoldData,
          style: "normal",
        },
        {
          name: "Montserrat",
          weight: 700,
          data: boldData,
          style: "normal",
        },
        {
          name: "Montserrat",
          weight: 800,
          data: extraBoldData,
          style: "normal",
        },
      ],
    }
  );
};
