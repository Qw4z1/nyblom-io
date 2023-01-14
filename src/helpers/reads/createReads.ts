import { gql, request } from "graphql-request";
import { InsertResult } from "../../types";

const mutation = gql`
  mutation ($slug: String!) {
    insert_reads_one(
      object: { read_count: 0, slug: $slug }
      on_conflict: { constraint: reads_pkey }
    ) {
      read_count
      slug
    }
  }
`;
const url = process.env.NEXT_PUBLIC_NHOST_URL as string;

export const createReads = async (slug: string) => {
  try {
    const result: InsertResult = await request(url, mutation, { slug: slug });
  } catch (error) {
    console.error(error);
  }
};
