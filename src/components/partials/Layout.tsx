import { Outlet } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { cn } from "@/lib/utils";

export const Layout = () => {
  const { visible, scrollToTop } = useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-all duration-300",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
};
