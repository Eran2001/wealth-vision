import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { milestones } from "@/data/milestones";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Image as ImageIcon, CheckCircle2, Clock, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const statusMeta = {
  completed: { label: "Completed", icon: CheckCircle2, className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  "in-progress": { label: "In progress", icon: Clock, className: "bg-amber-100 text-amber-800 border-amber-200" },
  upcoming: { label: "Upcoming", icon: Circle, className: "bg-secondary text-muted-foreground border-border" },
} as const;

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
        eyebrow="Milestones"
        title="Project Timeline"
        subtitle="Five formal checkpoints from initial proposal through final viva — each with allocated marks and clear deliverables."
      />
      <section className="container py-16">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{milestones.length}</span> milestones
          </p>
          <div className="w-full sm:w-72">
            <Select value={selected} onValueChange={handleJump}>
              <SelectTrigger>
                <SelectValue placeholder="Jump to a milestone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All milestones</SelectItem>
                {milestones.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.title}
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
            {milestones.map((m, idx) => {
              const meta = statusMeta[m.status];
              const Icon = meta.icon;
              return (
                <div key={m.id} id={`m-${m.id}`} className="relative pl-14 md:pl-20">
                  <div
                    className={cn(
                      "absolute left-0 md:left-2 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-background shadow-card-soft",
                      m.status === "completed" && "border-primary",
                      m.status === "in-progress" && "border-accent",
                      m.status === "upcoming" && "border-border"
                    )}
                  >
                    <span className="font-display text-sm font-semibold text-primary">{idx + 1}</span>
                  </div>

                  <Card className="p-6 md:p-7 shadow-card-soft hover:shadow-elevated transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold">{m.title}</h3>
                        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {m.dateRange}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className={cn("border", meta.className)}>
                          <Icon className="h-3 w-3 mr-1" />
                          {meta.label}
                        </Badge>
                        <Badge variant="secondary" className="font-mono">
                          {m.marks} marks
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-5 grid md:grid-cols-3 gap-5">
                      <div className="md:col-span-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                      </div>
                      <div className="aspect-video md:aspect-auto rounded-lg border border-dashed border-border bg-secondary/40 flex items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-8 w-8 opacity-40" />
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
