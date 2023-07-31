import { useEffect, useState } from "react";
import { incrementReads } from "../helpers/reads/incrementReads";

export const useReads = (slug: string, originalReads: number): number => {
  const isInDev = process.env.NODE_ENV === "development";

  const [readsState, setReadsState] = useState(originalReads);

  useEffect(() => {
    const reads = async () => {
      if (!isInDev) {
        const reads = await incrementReads(slug);
        setReadsState(reads);
      }
    };
    reads();
  }, [isInDev, slug]);

  return readsState;
};
