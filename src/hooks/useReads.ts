import { useEffect, useState } from "react";
import { updateReads } from "../helpers/reads/updateReads";

export const useReads = (slug: string, originalReads: number): number => {
  const isInDev = process.env.NODE_ENV !== "development";

  const [readsState, setReadsState] = useState(originalReads);

  useEffect(() => {
    const reads = async () => {
      if (!isInDev) {
        const reads = await updateReads(slug);
        setReadsState(reads);
      }
    };
    reads();
  }, [isInDev, slug]);

  return readsState;
};
