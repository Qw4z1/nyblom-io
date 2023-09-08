import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const regular = fetch(
  new URL("../../../fonts/Montserrat-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const extraBold = fetch(
  new URL("../../../fonts/Montserrat-ExtraBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const semiBold = fetch(
  new URL("../../../fonts/Montserrat-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const bold = fetch(
  new URL("../../../fonts/Montserrat-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("type") === "post") {
    return Post(searchParams);
  } else {
    return Generic(searchParams);
  }
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
  const regularData = await regular;
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

  const regularData = await regular;
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
          data: regularData,
          style: "normal",
          weight: 400,
        },
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
