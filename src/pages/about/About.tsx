import { PageHeader } from "@/components/partials/PageHeader";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { aboutPage } from "@/constants/about";
import { teamMembers, supervisors } from "@/constants/team";
import type { Person } from "@/types";

const AboutProfileCard = ({ person }: { person: Person }) => (
  <Card className="overflow-hidden shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated">
    <div className="grid gap-0 md:grid-cols-[minmax(220px,300px)_1fr]">
      <div className="bg-secondary">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full min-h-80 w-full object-cover object-top"
          />
        ) : (
          <div className="flex min-h-80 items-center justify-center bg-hero-gradient font-display text-heading font-heading text-primary-foreground">
            {person.initials}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center p-7 md:p-9">
        <p className="text-caption font-ui font-medium uppercase leading-body tracking-wide text-accent">
          {person.role}
        </p>
        <h3 className="mt-2 font-display text-title font-heading leading-compact tracking-close md:text-heading">
          {person.name}
        </h3>
        {person.studentId && (
          <p className="mt-2 font-ui text-body font-medium leading-body tracking-default text-foreground/80">
            {person.studentId}
          </p>
        )}
        {person.department && (
          <p className="mt-4 max-w-xl text-body leading-airy tracking-default text-muted-foreground">
            {person.department}
          </p>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="mt-4 text-fine font-medium leading-body tracking-default text-accent hover:underline"
          >
            {person.email}
          </a>
        )}
      </div>
    </div>
  </Card>
);

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.header.eyebrow}
        title={aboutPage.header.title}
        subtitle={aboutPage.header.subtitle}
      />
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-title md:text-heading font-heading">
              {aboutPage.team.title}
            </h2>
            <p className="mt-2 text-body leading-airy tracking-default text-muted-foreground">
              {aboutPage.team.description}
            </p>
          </div>
          <div className="grid gap-6">
            {teamMembers.map((p) => (
              <AboutProfileCard key={p.id} person={p} />
            ))}
          </div>

          <Separator className="my-16" />

          <div className="mb-10">
            <h2 className="font-display text-title md:text-heading font-heading">
              {aboutPage.supervisors.title}
            </h2>
            <p className="mt-2 text-body leading-airy tracking-default text-muted-foreground">
              {aboutPage.supervisors.description}
            </p>
          </div>
          <div className="grid gap-6">
            {supervisors.map((p) => (
              <AboutProfileCard key={p.id} person={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
