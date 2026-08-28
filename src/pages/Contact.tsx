import { cloneElement, type ReactElement, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  program: z.string().min(1, "Select a program"),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;
const options = [
  "Karate",
  "MMA",
  "Kickboxing",
  "Boxing",
  "Muay Thai",
  "Wrestling",
  "BJJ",
  "Fitness & Weight Loss",
  "Women's Self Defence",
  "Weapons Training",
];
export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const submit = (d: FormData) => {
    const text = `Hi OMAFA, I'd like to book a FREE trial class.%0A%0AName: ${encodeURIComponent(d.name)}%0APhone: ${encodeURIComponent(d.phone)}%0AProgram: ${encodeURIComponent(d.program)}%0AEmail: ${encodeURIComponent(d.email || "")}%0AMessage: ${encodeURIComponent(d.message || "")}`;
    window.open(
      `https://wa.me/918108973184?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <div>
      <PageHero
        eyebrow="Free Trial"
        title="Get In Touch"
        description="Book your free trial. Fill the form or reach us directly on WhatsApp — we'll confirm your first class in minutes."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr]">
          <form
            onSubmit={handleSubmit(submit)}
            className="rounded-sm border border-border bg-card p-6 sm:p-8"
          >
            <h2 className="font-display text-3xl">Book Your Free Trial</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your first trial class is free.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name")} className="input" />
              </Field>
              <Field label="Phone (WhatsApp)" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  className="input"
                  inputMode="tel"
                />
              </Field>
              <Field label="Email (optional)" error={errors.email?.message}>
                <input {...register("email")} className="input" type="email" />
              </Field>
              <Field label="Interested Program" error={errors.program?.message}>
                <select {...register("program")} className="input">
                  <option value="">Any</option>
                  {options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message (optional)">
                  <textarea
                    {...register("message")}
                    className="input min-h-32 resize-y"
                  />
                </Field>
              </div>
            </div>
            <button
              className="btn-hero mt-6 inline-flex items-center gap-2 rounded-sm px-6 py-3 font-display font-bold uppercase tracking-wider"
              type="submit"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
          <aside className="space-y-4">
            <Info icon={<MapPin />} title="Location (Tap for Maps)">
              <a
                href="https://maps.app.goo.gl/aHGcHkbTDKV7xtQFA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold hover:underline"
                aria-label="Open OMAFA location in Google Maps"
              >
                Haware Centurion Mall, Seawoods, Navi Mumbai
              </a>
            </Info>
            <Info icon={<Phone />} title="Call Us">
              <a href="tel:+918108973184" className="hover:text-gold">
                +91 81089 73184
              </a>
            </Info>
            <Info icon={<MessageCircle />} title="WhatsApp">
              <a href="https://wa.me/918108973184" className="hover:text-gold">
                Message on WhatsApp
              </a>
            </Info>
            <Info icon={<Clock />} title="Timings">
              Morning: 7:00 AM – 10:00 AM
              <br />
              Evening: 6:00 PM – 10:00 PM
            </Info>
            <Info icon={<Mail />} title="Email">
              <a href="mailto:omafa2023@gmail.com" className="hover:text-gold">
                omafa2023@gmail.com
              </a>
            </Info>
          </aside>
        </div>
      </section>
    </div>
  );
}
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2 text-sm font-medium">
      <span>{label}</span>
      {children}
      {error && <span className="block text-xs text-red-400">{error}</span>}
    </label>
  );
}
function Info({
  icon,
  title,
  children,
}: {
  icon: ReactElement<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-sm border border-border bg-card p-5">
      <div className="flex items-center gap-3 text-gold">
        {cloneElement(icon, { className: "h-5 w-5" })}
        <h3 className="font-display text-lg tracking-wider">{title}</h3>
      </div>
      <div className="mt-3 text-sm leading-6 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
