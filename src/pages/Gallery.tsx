import { PageHero } from "@/components/PageHero";
import { gallery } from "@/data/site";
export function Gallery() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Inside"
        accent="The Academy"
        description="A look at training, competitions, fitness classes and everyday life at OMAFA."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map(([src, cat]) => (
              <div
                key={cat}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm border border-border"
              >
                <img
                  src={src}
                  alt={`${cat} at OMAFA`}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 font-display text-sm tracking-widest text-gold opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
