import request, { gql } from "graphql-request";
import { MutationResult } from "../../types";

const mutation = gql`
  mutation update_reads($slug: String!) {
    update_reads_by_pk(pk_columns: { slug: $slug }, _inc: { read_count: 1 }) {
      read_count
      slug
    }
  }
`;

const url = process.env.NEXT_PUBLIC_NHOST_URL as string;

export const updateReads = async (slug: string): Promise<number> => {
  const result: MutationResult = await request(url, mutation, { slug: slug });
  return result.update_reads_by_pk.read_count;
};
