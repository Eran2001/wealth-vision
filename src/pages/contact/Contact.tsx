import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { site } from "@/data/site";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message captured",
      description: "This is a frontend-only demo — no message was actually sent.",
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
        subtitle="Questions about the research, collaboration, or access to deliverables — reach out via email, phone, or the form."
      />
      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-5 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <Card className="p-6 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {site.email}
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">{site.phone}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{site.address}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="lg:col-span-3 p-7 md:p-9 shadow-elevated">
            <h2 className="font-display text-2xl font-semibold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We typically respond within two working days.
            </p>
            <form onSubmit={onSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this about?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message here…" rows={6} required />
              </div>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
                Send message <Send className="ml-1.5 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
