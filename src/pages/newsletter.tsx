import { NextPage } from "next";
import { Head } from "../components/Head";
import InlineNewsletterForm from "../components/InlineNewsletterForm";
import Script from "next/script";

const Newsletter: NextPage = () => {
  return (
    <>
      <Head
        title="Viktor's Weekly"
        description="Lessons learned from a decade of building apps, teams and companies"
      />
      <div className="max-w-2xl flex flex-col justify-start items-start m-auto pb-10">
        <h1 className="mb-12">Viktor&apos;s Weekly Newsletter</h1>

        <h2 className="mb-8">
        Each Friday, I share frameworks, stories, and actionable lessons from my 20 years of building teams and companies. Get better at navigating hiring, delegation, and startup chaos to learn how dbecome more effective leaders.
        </h2>

        <p>This includes: </p>
        <ul className="list-disc pl-6 mb-12 space-y-4">
          <li>Actionable advice about how to build a company</li>
          <li>My fravorite frameworks for building product</li>
          <li>
            Links to the most interesting things I&apos;ve found this week
          </li>
          <li>Stories from companies I&apos;ve worked on, in and with</li>
          <li>The odd philosophical take</li>
        </ul>

        <InlineNewsletterForm />

        <p className="italic mt-12">
          &quot;I have subscribed to 1000s of newsletters and this is by far my
          favorite!&quot; - Viktor Nyblom
        </p>
      </div>
    </>
  );
};

export default Newsletter;
