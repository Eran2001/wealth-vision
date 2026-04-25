import { Link } from "react-router-dom";

import * as Icon from "@/components/icons";
import { footerContent, navigationLinks } from "@/constants/navigation";
import { site } from "@/constants/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-hero-gradient text-primary-foreground">
              <Icon.GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display text-body-lg font-heading leading-compact tracking-close">
              {site.projectName}
            </span>
          </div>
          <p className="mt-4 text-fine leading-airy tracking-default text-muted-foreground max-w-xs">
            {site.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-fine font-label leading-compact tracking-default text-foreground">
            {footerContent.navigationHeading}
          </h4>
          <ul className="grid grid-cols-2 gap-y-2 text-fine leading-body tracking-default">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-fine font-label leading-compact tracking-default text-foreground">
            {footerContent.institutionHeading}
          </h4>
          <p className="text-fine leading-airy tracking-default text-muted-foreground">
            {site.university}
          </p>
          <p className="mt-2 text-fine leading-body tracking-default text-muted-foreground">
            {site.email}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-caption leading-body tracking-default text-muted-foreground">
            © {new Date().getFullYear()} {site.projectName}.{" "}
            {footerContent.rightsSuffix}
          </p>
          <p className="text-caption leading-body tracking-default text-muted-foreground">
            {site.university}
          </p>
        </div>
      </div>
    </footer>
  );
};
