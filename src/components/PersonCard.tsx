import { Person } from "@/types";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export const PersonCard = ({ person }: { person: Person }) => {
  return (
    <Card className="group p-6 shadow-card-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-5">
        <div className="relative h-16 w-16 shrink-0 rounded-xl bg-hero-gradient flex items-center justify-center text-primary-foreground font-display text-lg font-semibold shadow-card-soft">
          {person.initials || <User className="h-6 w-6" />}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
            {person.name}
          </h3>
          {person.studentId && (
            <p className="mt-0.5 text-xs font-mono text-muted-foreground">{person.studentId}</p>
          )}
          <p className="mt-2 text-sm text-foreground/80 leading-snug">{person.role}</p>
          {person.department && (
            <p className="mt-1 text-xs text-muted-foreground">{person.department}</p>
          )}
        </div>
      </div>
    </Card>
  );
};
