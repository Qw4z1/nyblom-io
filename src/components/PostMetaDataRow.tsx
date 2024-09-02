import { FC, useMemo } from "react";

export interface PostMetaDataRowProps {
  publishedDate: string;
  readingTime: string;
}

const PostMetaDataRow: FC<PostMetaDataRowProps> = ({
  publishedDate,
  readingTime,
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
      {publishedAt} · {readingTime}
    </div>
  );
};

export default PostMetaDataRow;
