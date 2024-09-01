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
    <div className="flex flex-row text-base font-light lg:text-lg py-2 italic">
      {publishedAt} · {readingTime} ·{" "}
      {/* <div className="flex flex-row pl-1">
        <Eye /> <div className="w-1" /> {readCount}
      </div> */}
    </div>
  );
};

export default PostMetaDataRow;
