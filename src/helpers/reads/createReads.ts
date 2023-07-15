import { gql, request } from "graphql-request";
import { InsertResult } from "../../types";

const mutation = gql`
mutation ($slug: String!, $title: String!) {
  insert_reads_one(
    object: { slug: $slug, title: $title }
    on_conflict: { constraint: reads_pkey }
  ) {
    read_count
    slug
    title
  }
}
`;
const url = process.env.NEXT_PUBLIC_NHOST_URL as string;

export const createReads = async (slug: string, title: string) => {
  try {
    const result: InsertResult = await request(url, mutation, {
      slug: slug,
      title: title,
    });
  } catch (error) {
    console.error(error);
  }
};
