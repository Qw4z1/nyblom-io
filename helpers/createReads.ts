import { request } from "graphql-request";
import { InsertResult } from "../types";

const gql = `
  mutation ($slug: String!) {
    insert_reads_one(object: {read_count: 0, slug: $slug}, on_conflict: {constraint: reads_pkey}) {
      read_count
      slug
    }
  }
`;

export const createReads = async (url: string, slug: string) => {
  try {
    const result: InsertResult = await request(url, gql, { slug: slug });
  } catch (error) {
    console.error(error);
  }
};
