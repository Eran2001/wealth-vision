import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as Icon from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navbarContent, navigationLinks } from "@/constants/navigation";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full text-primary-foreground transition-all duration-300",
        scrolled
          ? "bg-primary/95 shadow-elevated backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex h-13 w-13 items-center justify-center rounded-md border border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground shadow-card-soft">
            <Icon.GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex flex-col leading-flush">
            <span className="font-display text-title font-heading leading-compact tracking-close text-primary-foreground">
              {site.projectName}
            </span>
            <span className="text-fine label-case tracking-airy text-primary-foreground/65">
              {navbarContent.projectType}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigationLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-fine font-ui rounded-md transition-colors",
                  isActive
                    ? "bg-primary-foreground/12 text-primary-foreground"
                    : "text-primary-foreground/72 hover:bg-primary-foreground/8 hover:text-primary-foreground",
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
              <Button
                variant="ghost"
                size="icon"
                aria-label={navbarContent.openMenuLabel}
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Icon.Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-display text-left leading-compact tracking-close">
                  {site.projectName}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navigationLinks.map((l) => (
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
