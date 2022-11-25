import { FC } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
}

export const HeaderImage: FC<ImageProps> = ({ src, alt = ""}) => {
  return (
    <Image
      src={`/images/${src}`}
      width={800}
      height={500}
      layout="responsive"
      loading="lazy"
      alt={alt}
    />
  );
};
