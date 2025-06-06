"use client";

import "@calcom/embed-react";
import { getCalApi } from "@calcom/embed-react";
import { FC, useEffect } from "react";

export interface BookingButtonProps {
  dataCalLink: string;
  buttonTitle: string;
}

const BookingButton: FC<BookingButtonProps> = ({ dataCalLink , buttonTitle}) => {
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
    <div className="py-6">
    <button
      data-cal-link={dataCalLink}
      className="border-black p-2 rounded border-2 font-semiboldhover:bg-yellow "
    >
      {buttonTitle}
    </button>
    </div>
  );
};

export default BookingButton;
