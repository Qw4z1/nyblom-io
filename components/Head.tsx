import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface HeadProps {
  title: string;
  description: string;
  image?: string;
}

export const Head: FC<HeadProps> = ({ title, description, image }) => {
  const router = useRouter();
  
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`https://nyblom.io${router.asPath}`} />
      <link rel="canonical" href={`https://nyblom.io${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NyblomIO" />
      <meta property="og:description" content={description} key="description"  />
      <meta property="og:title" content={title} key="title" />
      
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@qw4z1" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </NextHead>
  );
};