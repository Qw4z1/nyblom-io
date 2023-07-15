export interface MutationResult {
  update_reads_by_pk: {
    slug: string;
    read_count: number;
  };
}

export interface ReadsQueryResult {
  [x: string]: any;
  data: {
    reads_by_pk: {
      read_count: number;
    };
  }
}

export interface ShortLinkQueryResult {
  shortLinks: [
    {
      createdAt: Date;
      id: string;
      slug: string;
      url: string;
    }
  ]
}

export interface InsertResult {
  insert_reads_one: {
    slug: string;
    read_count: number;
    title: string;
  };
}
