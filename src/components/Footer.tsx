import { Link } from "react-router-dom";
import { Clock, Instagram, Facebook, MapPin, Phone } from "lucide-react";
export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="OMAFA Logo"
              className="h-9 w-auto object-contain"
            />
            <span className="font-display text-xl font-black tracking-wider text-gradient-gold">
              OMAFA
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Oriental Martial Arts & Fitness Academy — Navi Mumbai's home for
            Karate, MMA, Boxing, Kickboxing, Muay Thai, Fitness & Self Defence.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-gold">
            Programs
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Karate",
              "MMA",
              "Boxing",
              "Kickboxing",
              "Muay Thai",
              "Weight Loss",
              "Self Defence",
              "Weapons Training",
            ].map((x) => (
              <li key={x}>
                <Link to="/programs" className="hover:text-gold">
                  {x}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-gold">
            Visit Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href="https://maps.app.goo.gl/n1RYMwywVb5Ltnpk8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold hover:underline"
                aria-label="Open OMAFA location in Google Maps"
              >
                Haware Centurion Mall, Seawoods, Navi Mumbai
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+918108973184" className="hover:text-gold">
                8108973184
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Morning 7–10 AM · Evening 6–10 PM</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/omafa_2023/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © 2026 Oriental Martial Arts & Fitness Academy. All rights reserved.
          </p>
          <p>Built with discipline in Navi Mumbai.</p>
        </div>
      </div>
    </footer>
  );
}
const navLinks = [
  ["/", "Home"],
  ["/about", "About"],
  ["/coaches", "Coaches"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"],
] as const;
