import Link from "next/link";

const Announcement = () => {
  return (
    <div className="pt-8">
      <h2 className="italic">Heads up!</h2>
      <p className="italic">
        Are you a CTO who is ready to take your leadership to the next level? Let me help you find your <Link href="/nyblom-as-a-service">Great CTO Within</Link>! 
        <br/><br/>
        👉 Book a{" "}
        <Link href={"https://cal.com/nyblomio/discovery-call"}>
          free discovery call
        </Link>{" "}
        and start transforming your vision into action today. 
        <br/><br/>
        Not a CTO? No
        problem! Book a{" "}
        <Link href={"https://cal.com/nyblomio/claritycall"}>Clarity Call</Link>{" "}
        to tackle your toughest challenges and accelerate your business.
      </p>
    </div>
  );
};

export { Announcement };
