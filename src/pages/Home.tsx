import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Clock,
  ShieldCheck,
  Trophy,
  Users,
  Dumbbell,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { programs, testimonials } from "@/data/site";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionIntro } from "@/components/SectionIntro";
const why = [
  "Certified Coaches",
  "International Fighter Experience",
  "Beginner Friendly",
  "Kids & Adults Batches",
  "Women's Self Defence",
  "Fitness & Weight Loss Programs",
  "Personal Attention",
  "Safe Training Environment",
  "Flexible Batch Timings",
  "Modern Equipment",
  "Competition Training",
  "Affordable Fees",
];
const faqs = [
  {
    question: "Who can join OMAFA?",
    answer: "Anyone can join OMAFA, including children, teenagers, and adults of all fitness levels. You do not need any prior martial arts experience, as programs are tailored for both absolute beginners and advanced athletes."
  },
  {
    question: "Do beginners need prior experience?",
    answer: "No, beginners do not need any prior experience to join OMAFA. The training programs are specifically designed to teach you all fundamentals from scratch at your own pace."
  },
  {
    question: "Is a free trial class available?",
    answer: (
      <>
        Yes, your first trial class at OMAFA is completely free. You can book your free slot online or message the academy directly via the{" "}
        <a href="https://omafa.in/contact" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          OMAFA Official Contact Page
        </a>
        {" "}or their{" "}
        <a href="https://www.instagram.com/omafa_2023/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          Instagram Page
        </a>
        {" "}to get scheduled
      </>
    )
  },
  {
    question: "Do you train women?",
    answer: "Yes, OMAFA explicitly welcomes and trains women in Mixed Martial Arts (MMA), Karate, and fitness conditioning. The academy provides a safe, supportive environment focused on building strength, confidence, and practical self-defense skills for women of all fitness levels."
  },
  {
    question: "Can I lose weight here?",
    answer: "Yes, you can absolutely lose weight training at OMAFA. The high-intensity nature of MMA, Karate, and functional fitness conditioning burns a massive amount of calories while building lean muscle and boosting your metabolism."
  },
  {
    question: "Can I prepare for competitions?",
    answer: (
      <>
        Yes, you can fully prepare for amateur and professional competitions at{" "}
        <a href="https://omafa.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          OMAFA
        </a>
        . The academy provides specialized striking, grappling, and tournament preparation, alongside dedicated training for local, district, and open karate competitions.
      </>
    )
  },
];
const aboutSlides = [
  {
    src: "/images/about-karate.jpg",
    alt: "Karate training at OMAFA",
  },
  {
    src: "/images/gallery-mma-1.jpeg",
    alt: "MMA training at OMAFA",
  },
  {
    src: "/images/gallery-karate-1.jpeg",
    alt: "Kids karate class at OMAFA",
  },
  {
    src: "/images/gallery-mat-1.jpeg",
    alt: "Martial arts training at OMAFA",
  },
];
export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(160,20,20,.35),transparent_45%),linear-gradient(90deg,#0e0d0d_5%,rgba(14,13,13,.78)_45%,rgba(14,13,13,.3))]" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:gap-14">
          <div>
            <p className="font-display text-sm tracking-[.25em] text-primary">
              ORIENTAL MARTIAL ARTS & FITNESS ACADEMY
            </p>
            <h1 className="mt-4 font-display text-4xl font-black uppercase leading-[.95] tracking-tight sm:text-5xl lg:text-6xl">
              Become <span className="text-gradient-gold">Stronger.</span>
              <br />
              Fitter. <span className="text-gradient-red">Confident.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Navi Mumbai's professional academy for Karate, MMA, Kickboxing,
              Boxing, Muay Thai, Fitness & Self Defence. Train with
              international-level coaches in Seawoods.
            </p>
            <a
              href="tel:+918108973184"
              className="mt-6 inline-block font-display text-lg tracking-widest text-gold"
            >
              8108973184
            </a>
          </div>
          <form
            className="rounded-sm border border-border bg-card/90 p-5 shadow-2xl sm:p-7"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const message = [
                "Hi OMAFA, I'd like to book a FREE trial class.",
                `Name: ${formData.get("name")}`,
                `Phone: ${formData.get("phone")}`,
                `Program: ${formData.get("program")}`,
              ].join("\n");
              window.open(
                `https://wa.me/918108973184?text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
              Book Your Free Trial
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you're interested in and we'll be in touch.
            </p>
            <div className="mt-5 space-y-4">
              <label className="block space-y-2 text-sm font-medium">
                <span>Full Name</span>
                <input
                  className="input"
                  name="name"
                  autoComplete="name"
                  minLength={2}
                  required
                />
              </label>
              <label className="block space-y-2 text-sm font-medium">
                <span>Phone (WhatsApp)</span>
                <input
                  className="input"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  minLength={8}
                  required
                />
              </label>
              <label className="block space-y-2 text-sm font-medium">
                <span>Interested Program</span>
                <select className="input" name="program" required defaultValue="">
                  <option value="" disabled>
                    Select a program
                  </option>
                  {programs.map((program) => (
                    <option key={program.number} value={program.name}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button
              className="btn-hero mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 font-display font-bold uppercase tracking-wider"
              type="submit"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
      <section className="border-b border-border bg-card/40 py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 text-center sm:grid-cols-4 sm:px-6">
          {["Kids (5+ Years)", "Adults", "Women", "Pro Fighters"].map((x) => (
            <span
              key={x}
              className="font-display text-sm tracking-widest text-muted-foreground"
            >
              {x}
            </span>
          ))}
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="About OMAFA"
              title={
                <>
                  Martial Arts That{" "}
                  <span className="text-gradient-gold">Transform Lives.</span>
                </>
              }
            >
              At Oriental Martial Arts & Fitness Academy (OMAFA), we believe
              martial arts transform lives.
            </SectionIntro>
            <p className="mt-6 prose-copy">
              Our academy helps students build confidence, discipline, strength,
              fitness and self-defence skills in a safe and motivating
              environment. Whether you want to improve fitness, lose weight,
              compete professionally or simply gain confidence, our experienced
              coaches provide structured training for every age and fitness
              level.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["200+", "Students Trained"],
                ["15+", "Years Experience"],
                ["40+", "Champions Coached"],
              ].map(([n, l]) => (
                <div key={l} className="border-l border-primary pl-3">
                  <strong className="font-display text-3xl text-gold">
                    {n}
                  </strong>
                  <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <ImageCarousel />
        </div>
      </section>
      <section className="border-y border-border bg-card/30 py-20 sm:py-24">
        <SectionIntro
          eyebrow="Our Programs"
          title={
            <>
              Train In{" "}
              <span className="text-gradient-gold">Every Discipline</span>
            </>
          }
        >
          Ten world-class programs under one roof. Pick your path — or combine
          them.
        </SectionIntro>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.name} program={p} />
          ))}
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Meet Our Coaches"
            title={
              <>
                Learn From <span className="text-gradient-gold">Champions</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <CoachMini
              image="/images/coach-renuka_1.jpg"
              name="Shihan. Renukka Rasal"
              role="Founder and Karate Head Coach"
              tags={[
                "International 5th Dan Black Belt",
                "Kids Karate Specialist",
                "Women's Self Defence Coach",
                "Tournament Coach",
                "Fitness Expert",
              ]}
            />
            <CoachMini
              image="/images/coach-dipesh.jpg"
              name="Dipesh Rasal"
              role="Founder & MMA Head Coach"
              tags={[
                "International Pro. MMA Fighter",
                "Professional MMA Coach",
                "Competition Preparation",
                "Fitness Expert",
                "Self Defence Instructor",
              ]}
            />
            <CoachMini
              image="/images/coach-krishna.jpg"
              name="Hanshi. Krishna Chityal"
              role="Grand master & Chief Examiner"
              tags={[
                "International 8th Dan Black Belt",
                "35 yrs of expertise",
                "Armed and Unarmed Self Defence Expert",
                "Martial Arts Weapons coach",
                "Black belt Training Coach",
              ]}
            />
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Why OMAFA"
            title={
              <>
                Built For <span className="text-gradient-red">Results.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((x, i) => (
              <div
                key={x}
                className="flex items-center gap-3 rounded-sm border border-border bg-background/40 p-4"
              >
                <Check className="h-5 w-5 text-gold" />
                <span className="text-sm">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Class Schedule"
            title={
              <>
                Train <span className="text-gradient-gold">Any Time.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Schedule
              icon={<span>🌅</span>}
              title="Morning Batch"
              time="7:00 AM – 10:00 AM"
              days="Open Tuesday to Sunday"
            />
            <Schedule
              icon={<span>🌙</span>}
              title="Evening Batch"
              time="6:00 PM – 10:00 PM"
              days="Open Monday to Saturday"
            />
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Student Voices"
            title={
              <>
                Rated <span className="text-gradient-gold">5 Stars</span> On
                Google
              </>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-sm border border-border bg-background p-6"
              >
                <div className="flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  “{t.quote}”
                </p>
                <p className="mt-5 font-display tracking-widest text-gold">
                  — {t.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="FAQ"
            title={
              <>
                Common <span className="text-gradient-gold">Questions</span>
              </>
            }
          />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display tracking-wide">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="pt-3 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-gradient-to-br from-primary/10 via-background to-gold/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-display text-sm tracking-widest text-primary">
            — Visit Us
          </p>
          <h2 className="mt-3 font-display text-5xl">
            Start Today.{" "}
            <span className="text-gradient-gold">
              Your First Class Is Free.
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            <a
              href="https://maps.app.goo.gl/QzpXY8eWdSCV3TUg7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold hover:underline"
              aria-label="Open OMAFA location in Google Maps"
            >
              Haware Centurion Mall, Seawoods, Navi Mumbai
            </a>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-hero rounded-sm px-6 py-3 font-display font-bold uppercase tracking-wider"
            >
              Book Free Trial
            </Link>
            <a
              href="https://wa.me/918108973184?text=Hi%20OMAFA%2C%20I'd%20like%20to%20book%20a%20FREE%20trial%20class."
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border px-6 py-3 font-display font-bold uppercase tracking-wider hover:border-gold hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % aboutSlides.length);
    }, 850);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setCurrentIndex(
      (index) => (index - 1 + aboutSlides.length) % aboutSlides.length,
    );
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % aboutSlides.length);
  };

  return (
    <div className="relative">
      <div className="aspect-4/3 overflow-hidden rounded-sm border border-border">
        <img
          src={aboutSlides[currentIndex].src}
          alt={aboutSlides[currentIndex].alt}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      </div>
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Show previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm border border-white/30 bg-black/60 p-2 text-white hover:border-gold hover:text-gold"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Show next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm border border-white/30 bg-black/60 p-2 text-white hover:border-gold hover:text-gold"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {aboutSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === currentIndex}
            className={`h-2 w-2 rounded-full border border-white ${
              index === currentIndex ? "bg-gold" : "bg-transparent"
            }`}
          />
        ))}
      </div>
      <div className="absolute -bottom-5 -left-5 hidden rounded-sm border border-gold/30 bg-card p-5 shadow-2xl sm:block">
        <Trophy className="h-7 w-7 text-gold" />
        <p className="mt-2 font-display text-sm tracking-widest">
          DISCIPLINE. EXCELLENCE.
        </p>
      </div>
    </div>
  );
}
function CoachMini({
  image,
  name,
  role,
  tags,
}: {
  image: string;
  name: string;
  role: string;
  tags: string[];
}) {
  return (
    <article className="overflow-hidden rounded-sm border border-border bg-card">
      <div className="grid sm:grid-cols-[.8fr_1.2fr]">
        <img
          src={image}
          alt={name}
          className="h-full min-h-72 w-full object-cover"
        />
        <div className="p-6">
          <p className="font-display text-sm tracking-widest text-primary">
            {role}
          </p>
          <h3 className="mt-2 font-display text-3xl">{name}</h3>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {tags.map((t) => (
              <li key={t} className="flex gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
function Schedule({
  icon,
  title,
  time,
  days,
}: {
  icon: ReactNode;
  title: string;
  time: string;
  days: string;
}) {
  return (
    <div className="rounded-sm border border-border bg-card p-7">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-display text-2xl">{title}</h3>
      </div>
      <p className="mt-4 font-display text-3xl text-gold">{time}</p>
      <p className="mt-2 text-sm text-muted-foreground">{days}</p>
    </div>
  );
}
