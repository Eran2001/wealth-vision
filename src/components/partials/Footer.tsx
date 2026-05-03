import { Link } from "react-router-dom";

import * as Icon from "@/components/icons";
import { footerContent, navigationLinks } from "@/constants/navigation";
import { site } from "@/constants/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container py-16 grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr_0.8fr]">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft">
              <Icon.GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <span className="font-display text-title font-heading leading-compact tracking-close text-foreground">
                {site.projectName}
              </span>
              <p className="text-fine font-label label-case leading-compact tracking-open text-muted-foreground">
                {footerContent.projectType}
              </p>
            </div>
          </div>
          <p className="mt-5 text-body-lg leading-airy tracking-default text-muted-foreground">
            {site.tagline}
          </p>
          <p className="mt-3 text-body leading-airy tracking-default text-muted-foreground">
            {site.abstract}
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-body font-label leading-compact tracking-default text-foreground">
            {footerContent.navigationHeading}
          </h4>
          <ul className="grid grid-cols-2 gap-y-3 text-body leading-body tracking-default">
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
          <h4 className="mb-5 text-body font-label leading-compact tracking-default text-foreground">
            {footerContent.institutionHeading}
          </h4>
          <p className="text-body leading-airy tracking-default text-muted-foreground">
            {site.university}
          </p>
          <p className="mt-3 text-body leading-body tracking-default text-muted-foreground">
            {site.email}
          </p>
          <p className="mt-3 text-body leading-airy tracking-default text-muted-foreground">
            {site.address}
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-body font-label leading-compact tracking-default text-foreground">
            {footerContent.contextHeading}
          </h4>
          <p className="text-body leading-airy tracking-default text-muted-foreground">
            Final-year research project
          </p>
          <p className="mt-3 text-body leading-body tracking-default text-muted-foreground">
            Group {site.groupId}
          </p>
          <p className="mt-3 text-body leading-body tracking-default text-muted-foreground">
            {site.phone}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-fine leading-body tracking-default text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.projectName}.{" "}
            {footerContent.rightsSuffix}
          </p>
          <p className="text-fine leading-body tracking-default text-muted-foreground">
            {site.university}
          </p>
        </div>
      </div>
    </footer>
  );
};
