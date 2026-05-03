import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import * as Icon from "@/components/icons";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

const NotFound = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Page not found",
      description: `"${location.pathname}" doesn't exist.`,
      variant: "destructive",
    });
  }, [location.pathname, toast]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-eyebrow font-label label-case tracking-spread text-muted-foreground">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-hero font-heading leading-display tracking-close text-foreground">
        Page not found
      </h1>
      <p className="mt-5 max-w-md text-body leading-airy tracking-default text-muted-foreground">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">
          <Icon.Home />
          Return to home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
