import { NextPage } from "next";
import { Head } from "../components/Head";
import InlineNewsletterForm from "../components/InlineNewsletterForm";

const Newsletter: NextPage = () => {
  return (
    <>
      <Head
        title="Viktor's Weekly"
        description="Writing about the intersection of strategy, product and tech"
      />
      <div className="max-w-2xl flex flex-col justify-start items-start m-auto pb-10">
        <h1 className="mb-12">
          Viktor&apos;s Weekly: Where Strategy Meets Product and Technology
        </h1>

        <h2 className="mb-8">
          Every Friday, I deliver straight to your inbox:
        </h2>

        <ul className="list-disc pl-6 mb-12 space-y-4">
          <li>
            My lastest thoughts in the intersection of strategy, product, and
            tech
          </li>
          <li>
            Actionable advice from a decade of building apps, teams, and
            companies
          </li>
          <li>Thought-provoking ideas to elevate your professional game</li>
          <li>
            Links to the most interesting things I&apos;ve found this week
          </li>
        </ul>

        <InlineNewsletterForm />

        <p className="italic mt-12">
          &quot;I have subscribed to 1000s of newsletters and this is by far my favorite!&quot; - Viktor Nyblom
        </p>
      </div>
    </>
  );
};

export default Newsletter;
