import { useState } from "react";

import * as Icon from "@/components/icons";
import { PageHeader } from "@/components/partials/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  milestoneStatusMeta,
  milestones,
  milestonesPage,
} from "@/constants/milestones";
import { cn } from "@/lib/utils";

const Milestones = () => {
  const [selected, setSelected] = useState<string>("all");

  const handleJump = (id: string) => {
    setSelected(id);
    if (id !== "all") {
      const el = document.getElementById(`m-${id}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow={milestonesPage.header.eyebrow}
        title={milestonesPage.header.title}
        subtitle={milestonesPage.header.subtitle}
      />
      <section className="container py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-fine leading-body tracking-default text-muted-foreground">
            {milestonesPage.summaryLabel}{" "}
            <span className="font-ui text-foreground">{milestones.length}</span>{" "}
            {milestonesPage.summarySuffix}
          </p>
          <div className="w-full sm:w-72">
            <Select value={selected} onValueChange={handleJump}>
              <SelectTrigger>
                <SelectValue placeholder={milestonesPage.selectPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{milestonesPage.allOption}</SelectItem>
                {milestones.map((milestone) => (
                  <SelectItem key={milestone.id} value={milestone.id}>
                    {milestone.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {milestones.map((milestone, index) => {
              const meta = milestoneStatusMeta[milestone.status];
              const StatusIcon = meta.icon;

              return (
                <div
                  key={milestone.id}
                  id={`m-${milestone.id}`}
                  className="relative pl-14 md:pl-20"
                >
                  <div
                    className={cn(
                      "absolute left-0 md:left-2 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-background shadow-card-soft",
                      milestone.status === "completed" && "border-primary",
                      milestone.status === "in-progress" && "border-accent",
                      milestone.status === "upcoming" && "border-border",
                    )}
                  >
                    <span className="font-display text-fine font-heading text-primary">
                      {index + 1}
                    </span>
                  </div>

                  <Card className="p-6 shadow-card-soft hover:shadow-elevated transition-shadow md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-subhead font-heading leading-compact tracking-close md:text-title">
                          {milestone.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-1.5 text-fine leading-body tracking-default text-muted-foreground">
                          <Icon.Calendar className="h-3.5 w-3.5" />
                          {milestone.dateRange}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant="outline"
                          className={cn("border", meta.className)}
                        >
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {meta.label}
                        </Badge>
                        <Badge variant="secondary" className="font-mono">
                          {milestone.marks} {milestonesPage.marksSuffix}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <p className="text-fine leading-airy tracking-default text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-border bg-secondary/40">
                        <img
                          src={milestone.image.src}
                          alt={milestone.image.alt}
                          loading="lazy"
                          className="h-full min-h-36 w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestones;
