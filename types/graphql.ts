export interface MutationResult {
  update_reads_by_pk: {
    slug: string;
    read_count: number;
  };
}

export interface QueryResult {
  reads_by_pk: {
    read_count: number;
  };
}

export interface InsertResult {
  insert_reads_one: {
    slug: string;
    read_count: number;
  };
}
