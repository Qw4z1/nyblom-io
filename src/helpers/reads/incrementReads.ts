import { ReadsResponse } from "../../types";

const url = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_API_TOKEN as string;

export const incrementReads = async (slug: string) => {
  var reads = 0;
  console.log(`Slug ${url}`)
  try {
    const res = await fetch(`${url}/reads/${slug}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        action: "inc",
      }),
    });
    const jsonRes: ReadsResponse = await res.json();
    console.log(`Reads ${jsonRes}`)
    reads = jsonRes.reads;
  } catch (error) {
    console.error("incrementReads error");
    console.error(error);
  }
  return reads;
};
