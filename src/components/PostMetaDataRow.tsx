import { FC, useMemo } from "react";

export interface PostMetaDataRowProps {
  publishedDate: string;
  readingTime: string;
  readCount: number;
}

const PostMetaDataRow: FC<PostMetaDataRowProps> = ({
  publishedDate,
  readingTime,
  readCount,
}) => {
  const publishedAt = useMemo(
    () =>
      new Date(publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    [publishedDate]
  );
  
  return (
    <p className="text-base font-light lg:text-lg italic">
      {publishedAt} · {readingTime} · Read {readCount} times
    </p>
  );
};

export default PostMetaDataRow;
