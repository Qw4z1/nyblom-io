import Link from "next/link";

const Announcement = () => {
  return (
    <div className="pt-8">
      <h2 className="italic">Heads up!</h2>
      <p className="italic">
        After over a decade of building apps, teams and companies, I&apos;ve now started
        coaching founders and CTOs through something that I call{" "}
        <strong>
          <Link href="/nyblom-as-a-service/">Nyblom-as-a-Service</Link>
        </strong>
        .
      </p>
      <p className="italic">
        If this is something that would be interesting to you feel free to
        schedule a{" "}
        <strong>
          <Link href={"https://cal.com/nyblomio/discovery-call"}>
            free discovery call
          </Link>{" "}
        </strong>
        to see if we are a good match for each other.
      </p>
    </div>
  );
};

export { Announcement };
