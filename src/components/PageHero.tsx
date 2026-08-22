export function PageHero({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-gold/5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-display text-sm tracking-widest text-primary">
          — {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">
          {title}{" "}
          {accent && <span className="text-gradient-gold">{accent}</span>}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
