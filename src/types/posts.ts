export interface PostFrontMatter {
  title: string;
  subtitle: string;
  excerpt: string;
  firstPublished: string;
  lastUpdated: string;
  tags: string[];
  published?: boolean;
  featuredImage: string;
  popular?: number;
  slug: string;
}

export interface Post extends PostFrontMatter {
  wordCount: number;
  readingTime: string;
  sourceCode: string;
}
