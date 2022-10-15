import { request } from "graphql-request";
import { QueryResult } from "../types";

const query = `
query ($slug: String!) {
  reads_by_pk(slug: $slug) {
    read_count
  }
}`;

export const getReads = async (
  url: string,
  slug: any
): Promise<QueryResult> => {
  return request<QueryResult, string>(url, query, slug);
};
