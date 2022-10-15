import axios from "axios";
import useSWR from "swr";
import { Reads } from "../types";

export const useReads = (slug: string): Reads => {
  const fetcher = (url: string) => axios.post(url).then((r) => r.data);
  const { data, error } = useSWR(`/api/reads/${slug}`, fetcher);

  if (data) {
    return data;
  } else {
    return { reads: 0 };
  }
};
