import { FC } from "react";
import { PostFrontMatter } from "../types";
import Link from "next/link";

export interface ListProps {
  posts: PostFrontMatter[];
}

const MdxPostList: FC<ListProps> = ({ posts }) => {
  return (
    <>
      <p>So far I&apos;ve published {posts.length} posts:</p>
      <ul>
        {posts.reverse().map((it) => {
          const url = `/blog/${it.slug}`;
          return (
            <li
              className="leading-normal mt-2 mb-4 p-0 list-inside list-disc"
              key={it.slug}
            >
              <Link href={url}>{it.title}</Link>.
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MdxPostList;
