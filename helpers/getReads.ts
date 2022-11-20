import { request } from "graphql-request";
import { ReadsQueryResult } from "../types";

const query = `
query ($slug: String!) {
  reads_by_pk(slug: $slug) {
    read_count
  }
}`;

export const getReads = async (
  url: string,
  slug: any
): Promise<ReadsQueryResult> => {
  return request<ReadsQueryResult, string>(url, query, slug);
};
