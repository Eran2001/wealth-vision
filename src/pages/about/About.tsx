import { PageHeader } from "@/components/partials/PageHeader";
import { PersonCard } from "@/components/partials/PersonCard";
import { Separator } from "@/components/ui/separator";
import { aboutPage } from "@/constants/about";
import { teamMembers, supervisors } from "@/constants/team";

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
          <div className="grid gap-5 sm:grid-cols-2">
            {teamMembers.map((p) => (
              <PersonCard key={p.id} person={p} />
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supervisors.map((p) => (
              <PersonCard key={p.id} person={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
