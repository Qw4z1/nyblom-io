import { FC, useMemo } from "react";
import Eye from "./icons/Eye";

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
    <p className="flex flex-row text-base font-light lg:text-lg italic">
      {publishedAt} · {readingTime} ·{" "}
      <div className="pl-1 flex flex-row">
        <Eye /> <div className="w-1" /> {readCount}
      </div>
    </p>
  );
};

export default PostMetaDataRow;
