import axios from "axios";
import useSWR from "swr";

export const useReads = (
  slug: string,
  originalReads: number,
  update: boolean = false
): number => {
  let fetcher;
  if (update) {
    fetcher = (url: string) => axios.post(url).then((r) => r.data);
  } else {
    fetcher = (url: string) => axios.get(url).then((r) => r.data);
  }
  const { data } = useSWR(`/api/reads/${slug}`, fetcher);

  return data?.reads ?? originalReads;
};
