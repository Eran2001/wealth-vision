import * as Icon from "@/components/icons";
import { Card } from "@/components/ui/card";
import type { Person } from "@/types";

export const PersonCard = ({ person }: { person: Person }) => {
  return (
    <Card className="group p-6 shadow-card-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-5">
        <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-hero-gradient flex items-center justify-center text-primary-foreground font-display text-body-lg font-heading shadow-card-soft">
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          ) : (
            person.initials || <Icon.User className="h-6 w-6" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-body-lg font-heading leading-compact tracking-close text-foreground">
            {person.name}
          </h3>
          {person.studentId && (
            <p className="mt-0.5 text-caption font-ui leading-body tracking-default text-muted-foreground">
              {person.studentId}
            </p>
          )}
          <p className="mt-2 text-fine leading-close tracking-default text-foreground/80">
            {person.role}
          </p>
          {person.department && (
            <p className="mt-1 text-caption leading-body tracking-default text-muted-foreground">
              {person.department}
            </p>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="mt-1 block text-caption leading-body tracking-default text-accent hover:underline"
            >
              {person.email}
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
