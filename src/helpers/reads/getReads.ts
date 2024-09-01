import { ReadsResponse } from "../../types";

const url = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_API_TOKEN as string;

export const getReads = async (slug: string): Promise<number> => {
  let reads = 0;
  try {
    // const res = await fetch(`${url}/reads/${slug}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // const debug = await res.text();
    // console.log("Reads: ", debug)
    // const jsonRes: ReadsResponse = await res.json();
    // reads = jsonRes.reads;
  } catch (error) {
    console.error("getReads error", error);
  }
  return reads;
};
