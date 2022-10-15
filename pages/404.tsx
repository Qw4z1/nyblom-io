import Link from "next/link";
import React from "react";
import { Head } from "../components/head";

const FourOhFour = () => (
  <div className="text-center">
    <Head title="404: Not found" description="Nothing to see here" />
    <h1>NOT FOUND</h1>
    <p>
      Sorry, nothing to see here. Move along... Maybe to{" "}
      <Link href="/about/">
        <a>The About</a>
      </Link>{" "}
      page?
    </p>
  </div>
);

export default FourOhFour;
