import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/data/site";
export function Programs() {
  return (
    <div>
      <PageHero
        eyebrow="Programs"
        title="Every Discipline."
        accent="One Academy."
        description="Choose one path or combine several. Every program is beginner-friendly and coached by certified professionals."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.name} program={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
