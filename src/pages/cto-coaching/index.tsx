import type { NextPage } from "next";
import { Head } from "../../components/Head";
import BookingButton from "../../components/BookingButton";
import Testimonials from "../../components/testimonials/Testimonials";
import Image from "next/image";
import { useState } from "react";



const faqs = [
  {
    q: "What makes CTO coaching different from general executive coaching?",
    a: "CTO coaching combines traditional leadership development with hands-on technical and strategic mentoring from experienced CTOs. You'll benefit from both proven coaching methods and real-world insights from leaders who have faced similar challenges.",
  },
  {
    q: "Who is this coaching for?",
    a: "It's designed for CTOs, VPs of Engineering, and technical founders who want to grow as leaders, build stronger teams, and drive business results.",
  },
  {
    q: "How does the coaching process work?",
    a: "You'll start with a discovery call to clarify your goals. Then, you'll work with your coach in regular sessions to set objectives, identify obstacles, and develop actionable strategies for growth.",
  },
  {
    q: "What outcomes can I expect?",
    a: "Clients often report increased confidence, improved team performance, better decision-making, and greater job satisfaction. The process is tailored to your needs, so you get measurable, lasting results.",
  },
  {
    q: "Can I include my team?",
    a: "Yes! Just coaching the CTO is the equivalent of building a silo. I regularly include team leads, directors and VP of Engineering in the coaching package. That way we get powerful team coaching in conjunction with the 1:1 coaching.",
  },
  {
    q: "Will I get any new tools?",
    a: "Absolutely! During our work I will help you implement the tools and frameworks that we agree are the best fit for your specific situation. Just remmeber that tools alone won't make you a great CTO, so the bulk of the work will be about creating shifts within you!",
  },
  {
    q: "How much does it cost?",
    a: "",
  }
];

const CtoCoaching: NextPage = () => {
  return (
    <>
      <Head
        title={"CTO Coaching by Viktor Nyblom"}
        description={"Transform your leadership and unlock your potential with bespoke CTO coaching from an experienced technology leader."}
      />
      <main className="max-w-4xl flex flex-col justify-start items-start m-auto pb-10 px-2">
        <div className="content-center w-full flex justify-center mb-6">
          <Image
            src="/images/twitterhead-large.png"
            alt="Picture of Viktor Nyblom"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        {/* Hero/Main fold */}
        <section className="mt-2 mb-8 w-full">
          <h1 className="text-4xl font-bold mb-2">Transformative CTO Coaching for Modern Tech Leaders</h1>
          <p className="text-lg mb-4 text-gray-700">
            Set yourself up for success and unlock your full leadership potential with bespoke coaching from an experienced CTO. Whether you're looking to accelerate your growth, build on your strengths, or navigate complex challenges, you'll get a tailored program that combines executive coaching with real-world technical insight.
          </p>
          <BookingButton dataCalLink="nyblomio/discovery-call" buttonTitle="Book a Free Discovery Call" />
        </section>

        {/* Social Proof */}
        <section className="mb-8 w-full">
          <p className="text-md text-gray-600">Trusted by CTOs and founders at fast-growing startups and scaleups.</p>
        </section>

        {/* Benefits */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold mb-2">Why CTO Coaching?</h2>
          <div className="space-y-4 text-base text-gray-800">
            <div>
              <span role="img" aria-label="Leadership Confidence">🦸‍♂️</span> <strong>Leadership Confidence:</strong> One CTO I worked with was stepping into their first executive role and felt overwhelmed by the weight of decision-making. Through coaching, they developed a structured approach to setting priorities and communicating vision, which not only boosted their confidence but also inspired trust across their leadership team.
            </div>
            <div>
              <span role="img" aria-label="Team Performance">🤝</span> <strong>Team Performance:</strong> Another client faced persistent delivery bottlenecks and low morale within their engineering team. By focusing on team dynamics and introducing new feedback rituals, they saw a measurable improvement in collaboration and output—turning a struggling team into a high-performing unit.
            </div>
            <div>
              <span role="img" aria-label="Navigating Change">🧭</span> <strong>Navigating Change:</strong> When a founder-CTO was leading their company through a major pivot, coaching provided a sounding board for tough decisions and helped them manage resistance. With support, they were able to bring their team on board, adapt their strategy, and successfully relaunch their product.
            </div>
            <div>
              <span role="img" aria-label="Personal Growth & Well-being">🌱</span> <strong>Personal Growth & Well-being:</strong> Many technical leaders struggle with burnout and self-doubt. One engineering leader used coaching to set boundaries, delegate more effectively, and rediscover their passion for technology—leading to renewed energy and a healthier work-life balance.
            </div>
          </div>
        </section>

        {/* Three Core Pillars */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold mb-2">The Three Core Pillars of CTO Transformation</h2>
          <p className="mb-4">I help startup CTOs transform from hands-on managers into strategic leaders by focusing on three essential areas:</p>
          <div className="space-y-3 text-base text-gray-800">
            <div>
              <strong>Energy Management:</strong> Master your time and focus on what truly matters, without burning out.
            </div>
            <div>
              <strong>Technical Excellence:</strong> Transform your tech organization into the engine that drives company growth.
            </div>
            <div>
              <strong>Executive Mindset:</strong> Evolve from code delivery to vision delivery, deepening C-suite relationships.
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <div className="space-y-4 text-base text-gray-800">
            <div className="flex items-baseline">
              <span className="flex-shrink-0 bg-yellow text-black font-extrabold rounded px-3 py-1 text-lg mr-4">1</span>
              <span>Book a free discovery call to discuss your unique challenges and aspirations.</span>
            </div>
            <div className="flex items-baseline">
              <span className="flex-shrink-0 bg-yellow text-black font-extrabold rounded px-3 py-1 text-lg mr-4">2</span>
              <span>If it's a match, we'll set up our first coaching call where we decide on a scope and a goal.</span>
            </div>
            <div className="flex items-baseline">
              <span className="flex-shrink-0 bg-yellow text-black font-extrabold rounded px-3 py-1 text-lg mr-4">3</span>
              <span>Biweekly 1:1 coaching sessions, where we work together on your goal.</span>
            </div>
            <div className="flex items-baseline">
              <span className="flex-shrink-0 bg-yellow text-black font-extrabold rounded px-3 py-1 text-lg mr-4">4</span>
              <span>Wrap up and recap your transformation.</span>
            </div>
            <div className="flex items-baseline">
              <span className="flex-shrink-0 bg-yellow text-black font-extrabold rounded px-3 py-1 text-lg mr-4">5</span>
              <span>Recommit towards a new goal or move on by yourself.</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-8 w-full">
          <Testimonials tKey="naas" />
        </section>

        {/* FAQ */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={faq.q} className="border rounded-md">
                  <button
                    type="button"
                    className="w-full text-left px-4 py-3 font-semibold focus:outline-none flex justify-between items-center"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span>{faq.q}</span>
                    <span className="ml-2">{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-4 pb-4 text-gray-700 animate-fade-in"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-8 w-full flex flex-col items-center">
          <BookingButton dataCalLink="nyblomio/discovery-call" buttonTitle="Start Your Journey" />
        </section>
      </main>
    </>
  );
};

export default CtoCoaching;
