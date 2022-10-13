export interface ContentFrontMatter {
  lastUpdated: string;
}

export interface Content extends ContentFrontMatter {
  sourceCode: string;
}
