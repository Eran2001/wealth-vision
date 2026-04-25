import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, GraduationCap } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/domain", label: "Domain" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/presentations", label: "Slides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-hero-gradient text-primary-foreground shadow-card-soft">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-flush">
            <span className="font-display text-body font-heading text-foreground">
              {site.projectName}
            </span>
            <span className="text-eyebrow label-case tracking-airy text-muted-foreground">
              Research Project
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-fine font-ui rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="font-display text-left">
                  {site.projectName}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "px-3 py-2.5 rounded-md text-fine font-ui transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary",
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
