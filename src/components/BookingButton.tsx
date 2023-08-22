"use client";

import "@calcom/embed-react";
import { getCalApi } from "@calcom/embed-react";
import { FC, useEffect } from "react";

export interface BookingButtonProps {
  dataCalLink: string;
}

const BookingButton: FC<BookingButtonProps> = ({ dataCalLink }) => {
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
      data-cal-link={dataCalLink}
      className="border-black p-2 rounded border-2 font-semibold my-4 hover:bg-yellow "
    >
      Schedule discovery call
    </button>
  );
};

export default BookingButton;
