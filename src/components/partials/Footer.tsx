import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { site } from "@/constants/site";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/domain", label: "Domain" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/presentations", label: "Slides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-hero-gradient text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display text-body-lg font-heading">
              {site.projectName}
            </span>
          </div>
          <p className="mt-4 text-fine text-muted-foreground max-w-xs leading-airy">
            {site.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-fine font-label text-foreground mb-4">
            Navigate
          </h4>
          <ul className="grid grid-cols-2 gap-y-2 text-fine">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-fine font-label text-foreground mb-4">
            Institution
          </h4>
          <p className="text-fine text-muted-foreground leading-airy">
            {site.university}
          </p>
          <p className="mt-2 text-fine text-muted-foreground">{site.email}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} {site.projectName}. All rights
            reserved.
          </p>
          <p className="text-caption text-muted-foreground">{site.university}</p>
        </div>
      </div>
    </footer>
  );
};
