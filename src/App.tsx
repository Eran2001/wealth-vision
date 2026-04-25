import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

const HomePage = lazy(() => import("./pages/home"));
const Domain = lazy(() => import("./pages/domain/Domain"));
const Milestones = lazy(() => import("./pages/milestones/Milestones"));
const Documents = lazy(() => import("./pages/documents/Documents"));
const Presentations = lazy(() => import("./pages/presentation/Presentations"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const NotFound = lazy(() => import("./pages/404/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
