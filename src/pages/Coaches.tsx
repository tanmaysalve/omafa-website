import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
const coaches = [
  {
    image: "/images/coach-renuka_1.jpg",
    role: "Founder and Karate Head Coach",
    name: "Shihan Renuka Rasal",
    intro:
      "Renuka Rasal is a 5th Dan Black Belt and OMAFA's Head Karate Coach. She specialises in kids' karate and women's self defence, with multiple tournament-winning students under her guidance.",
    tags: [
      "International 5th Dan Black Belt",
      "Kids Karate Specialist",
      "Women's Self Defence Coach",
      "Tournament Coach",
      "Fitness Expert",
    ],
  },
  {
    image: "/images/coach-dipesh.jpg",
    role: "Founder & MMA Head Coach",
    name: "Dipesh Rasal",
    intro:
      "Dipesh Rasal is an international MMA fighter and the founder of OMAFA. With years of professional fight experience and a track record of coaching amateur and pro fighters, he brings elite-level knowledge to every session — from beginners to competition athletes.",
    tags: [
      "International MMA Fighter",
      "Professional MMA Coach",
      "Competition Preparation",
      "Fitness Expert",
      "Certified Self Defence Instructor",
    ],
  },
  {
    image: "/images/coach-krishna.jpg",
    role: "Grand master & Chief Examiner",
    name: "Hanshi Krishna Chityal",
    intro:
      "Krishna Chityal is a Grand master and Chief Examiner Hanshi with decades of experience in martial arts. His expertise spans various disciplines, making him a sought-after instructor for both beginners and advanced practitioners.",
    tags: [
      "International 8th Dan Black Belt",
      "35 yrs of expertise",
      "Armed and Unarmed Self Defence Expert",
      "Martial Arts Weapons coach",
      "Black belt Training Coach",
    ],
  },
];
export function Coaches() {
  return (
    <div>
      <PageHero
        eyebrow="Coaches"
        title="Learn From"
        accent="Champions."
        description="International-level coaches with decades of combined experience."
      />
      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
          {coaches.map((c) => (
            <article
              key={c.name}
              className="overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="grid md:grid-cols-2">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full min-h-80 w-full object-cover"
                />
                <div className="p-7 sm:p-10">
                  <p className="font-display text-sm tracking-widest text-primary">
                    {c.role}
                  </p>
                  <h2 className="mt-2 font-display text-4xl">{c.name}</h2>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {c.intro}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {c.tags.map((t) => (
                      <li key={t} className="flex gap-2">
                        <Check className="h-4 w-4 shrink-0 text-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-card/30 py-20 text-center">
        <h2 className="font-display text-4xl">Train Under Champions.</h2>
        <p className="mt-3 text-muted-foreground">
          Book a free trial and experience the OMAFA difference.
        </p>
        <Link
          to="/contact"
          className="btn-hero mt-7 inline-flex rounded-sm px-6 py-3 font-display font-bold uppercase tracking-wider"
        >
          Book Free Trial
        </Link>
      </section>
    </div>
  );
}
