import type { NextApiRequest, NextApiResponse } from "next";
import { getShortLink } from "../../../helpers/getShortLink";

const url = process.env.NEXT_PUBLIC_NHOST_URL as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(400).json({ message: "Not supported" });
  }

  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;
    res.json({ message: "needs a slug" });
    return;
  }

  try {
    const result = await getShortLink(url, { slug: slug });

    if (result.shortLinks.length > 0) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Cache-Control",
        "s-maxage=1000000000, stale-while-revalidate"
      );

      res.status(200).json({ data: result.shortLinks[0] });
    } else {
      res.status(404).json({ message: "Slug not found" });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: "Failed" });
  }
}
