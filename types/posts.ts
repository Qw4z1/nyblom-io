export interface PostFrontMatter {
  title: string;
  subtitle: string;
  excerpt: string;
  firstPublished: string;
  lastUpdated: string;
  tags: string[];
  published?: boolean;
  featuredImage: string;
  // views: number;
  slug: string;
  tag?: string;
}

export interface Post extends PostFrontMatter {
  wordCount: number;
  readingTime: string;
  sourceCode: string;
}