import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SHOW_THRESHOLD = 400;

export function useScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Track scroll position to show/hide the button
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return { visible, scrollToTop };
}
