
// Test URL
// http://localhost:3000/api/og?type=post&title=You%27re%20doing%20fine&publishDate=2023-01-03&subTitle=what&readTime=6%20min%20read&reads=45
const blogPost = ({
  title,
  subTitle,
  publishDate,
  readTime,
}: {
  title: string;
  subTitle: string;
  publishDate: string;
  readTime: string;
}): string => {
  const url = [
    `?type=post`,
    `&title=${encodeURIComponent(title)}`,
    `&publishDate=${encodeURIComponent(publishDate)}`,
    `&subTitle=${encodeURIComponent(subTitle)}`,
    `&readTime=${encodeURIComponent(readTime)}`,
  ].join("");

  return url;
};

// Test URL
// http://localhost:3000/api/og?type=page&title=About&description=All%20about%20Viktor
const generic = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): string => {
  const url = [
    `?type=page`,
    `&title=${encodeURIComponent(title)}`,
    `&description=${encodeURIComponent(description)}`,
  ].join("");

  return url;
};

export const buildOgImageUrl = ({
  type,
  title,
  subTitle = "",
  publishDate = "",
  readTime = "",
  description = "",
}: {
  type: string;
  title: string;
  subTitle?: string;
  publishDate?: string;
  readTime?: string;
  description?: string;
}): string => {
  let params = "";
  if (type === "post") {
    params = blogPost({
      title,
      subTitle,
      publishDate,
      readTime,
    });
  } else {
    params = generic({ title, description });
  }
  return [`${process.env.NEXT_PUBLIC_ROOT_URL}/api/og`, params].join("");
};