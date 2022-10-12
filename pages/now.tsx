import type { NextPage } from "next";
import { Head } from "../components/head";

const Now: NextPage = () => {
  return (
    <>
      <Head title={"Now"} description={"What is Viktor up to Now?"} />
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">
        <h1>Now</h1>
        <p className="font-italic">
          This is a Now Page. If you don't know what a{" "}
          <a href="https://nownownow.com/about">Now Page</a> is and you have
          your own website, I think you should one too.
        </p>
        <h2>Life</h2>
        I've been living in Stockholm since 2017 and, more specifically,
        Södermalm since 2019. I've been living in startup land since 2012.
        Either working for startups, building startups or investing in startups.
        Some times all three at once. - Working with a new coach, focussing more
        on improving my personal life. This coaching is based on the [Handel
        Method](https://www.handelgroup.com/hg-life-programs/), but it's too
        early for me to say if I can recommend it. - Lunches are mostly [Huel
        based](https://huel.mention-me.com/m/ol/jr8aw-viktor-nyblom) (affiliate
        link).
        <h2>Health and fitness </h2>
        During December I gave myself permission to really let myself go. I
        properly gave in to my cravings and ate every tasty thing that came into
        my way. The only rule here was that after the Christmas weekend I
        promised myself to go on a fairly strict training program. My current
        strength training routine consist of the classic [Starting Stregnth
        program](https://startingstrength.com/get-started/programs). My goal it
        to be able to squat 80 kg(3x5) paired with a body weight of 87 kg by the
        end of the year.
        <h2>Tech</h2>
        Currently CTO at a startup called [Baby
        Journey](https://babyjourney.se/). Our vision is to become a universe
        for life with small children. This vision leaves a lot of room to
        explore new technologies, but the core of the tech is our React Native
        app. Thrilled to see [Stockiful](https://stockiful.com) 2.0 grow into a
        really nice e-commerce solution using Nextjs and Stripe. This is a hobby
        project As always, [Firebase](https://firebase.google.com/) things are
        on my mind. In particular Firebase Analytics in conjuction with push
        notifications and user audiences. I think Firebase only really shines if
        you use all the bits and pieces in it. If you're only using it as a
        database, then you are probably better of using something like
        [Nhost](https://nhost.io/)
      </div>
    </>
  );
};

export default Now;
