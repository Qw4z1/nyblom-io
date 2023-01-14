import { gql, request } from "graphql-request";
import { ReadsQueryResult } from "../../types";

const query = gql`
  query ($slug: String!) {
    reads_by_pk(slug: $slug) {
      read_count
    }
  }
`;

const url = process.env.NEXT_PUBLIC_NHOST_URL as string;

export const getReads = async (slug: string): Promise<number> => {
  try {
    const result: ReadsQueryResult = await request(url, query, {
      slug: slug,
    });
    return result.reads_by_pk.read_count;
  } catch (e) {
    console.error(e);
  }
  return 0;
};
