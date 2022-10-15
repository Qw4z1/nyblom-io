import type { NextApiRequest, NextApiResponse } from "next";
import { request } from "graphql-request";
import { Reads, MutationResult } from "../../../types";
import { getReads } from "../../../helpers/getReads";

const url = process.env.NHOST_URL as string;

const mutation = `
mutation update_reads($slug: String!) {
  update_reads_by_pk(pk_columns: {slug: $slug}, _inc: {read_count: 1}) {
    read_count
    slug
  }
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reads>
) {
  if (req.method === "GET") {
    const slug = req.query;
    try {
      const result = await getReads(url, slug)
      res.status(200).json({ reads: result.reads_by_pk.read_count });
    } catch (e) {
      console.log(e);
      res.status(400);
    }
  } else if (req.method === "POST") {
    const slug = req.query;
    try {
      const result: MutationResult = await request(url, mutation, slug);
        res
          .status(200)
          .json({ reads: result.update_reads_by_pk.read_count });
    } catch (e) {
      console.log(e);
      res.status(400);
    }
  } else {
    res.status(400);
  }
}
