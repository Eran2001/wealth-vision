import { PageHeader } from "@/components/partials/PageHeader";
import { Separator } from "@/components/ui/separator";
import { PersonCard } from "@/components/partials/PersonCard";
import { teamMembers, supervisors } from "@/constants/team";

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="The People Behind the Work"
        subtitle="Four researchers and a supervisory panel guiding the direction, methodology, and quality of the project."
      />
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-title md:text-heading font-heading">
              Team Members
            </h2>
            <p className="mt-2 text-muted-foreground">
              Each member leads a research component and contributes to the
              integrated system.
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
              Supervisors
            </h2>
            <p className="mt-2 text-muted-foreground">
              Academic and industry guidance throughout the research lifecycle.
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
