"use client";

import "@calcom/embed-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const BookingButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      if (!!cal) {
        cal("ui", {
          theme: "light",
          styles: {
            branding: { brandColor: "#ffde03" },
          },
        });
      }
    })();
  }, []);
  return (
    <button
      data-cal-link="nyblomio/advisory"
      className="border-black p-2 rounded border-4 font-bold hover:bg-yellow "
    >
      Book Me
    </button>
  );
};

export default BookingButton;
