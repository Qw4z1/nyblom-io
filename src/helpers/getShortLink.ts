import { gql, request } from "graphql-request";
import { ShortLinkQueryResult } from "../types";

const query = gql`
query ($slug: String!)  {
  shortLinks(where: {slug: {_eq: $slug}}) {
    createdAt
    id
    slug
    url
  }
}`;

export const getShortLink = async (
  url: string,
  slug: any
): Promise<ShortLinkQueryResult> => {
  return request<ShortLinkQueryResult, string>(url, query, slug);
};
