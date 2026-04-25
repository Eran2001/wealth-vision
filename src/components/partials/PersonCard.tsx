import { Person } from "@/types";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export const PersonCard = ({ person }: { person: Person }) => {
  return (
    <Card className="group p-6 shadow-card-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-5">
        <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-hero-gradient flex items-center justify-center text-primary-foreground font-display text-body-lg font-heading shadow-card-soft">
          {person.image ? (
            <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
          ) : (
            person.initials || <User className="h-6 w-6" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-body-lg font-heading text-foreground leading-compact">
            {person.name}
          </h3>
          {person.studentId && (
            <p className="mt-0.5 text-caption font-mono text-muted-foreground">{person.studentId}</p>
          )}
          <p className="mt-2 text-fine text-foreground/80 leading-close">{person.role}</p>
          {person.department && (
            <p className="mt-1 text-caption text-muted-foreground">{person.department}</p>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="mt-1 text-caption text-accent hover:underline block"
            >
              {person.email}
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
