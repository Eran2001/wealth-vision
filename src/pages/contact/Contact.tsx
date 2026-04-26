import type { FormEvent } from "react";

import * as Icon from "@/components/icons";
import { PageHeader } from "@/components/partials/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactCards, contactPage } from "@/constants/contact";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast(contactPage.toast);
  };

  return (
    <>
      <PageHeader
        eyebrow={contactPage.header.eyebrow}
        title={contactPage.header.title}
        subtitle={contactPage.header.subtitle}
      />
      <section className="container py-16">
        <div className="grid max-w-6xl mx-auto gap-10 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-5 lg:col-span-2">
            {contactCards.map((item) => (
              <Card key={item.label} className="p-6 shadow-card-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-body font-heading leading-compact text-foreground">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-fine leading-airy tracking-default text-muted-foreground hover:text-foreground"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-fine leading-airy tracking-default text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card className="p-7 shadow-elevated md:p-9 lg:col-span-3">
            <h2 className="font-display text-title font-heading leading-compact tracking-close">
              {contactPage.form.title}
            </h2>
            <p className="mt-1 text-fine leading-airy tracking-default text-muted-foreground">
              {contactPage.responseNote}
            </p>
            <form onSubmit={onSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {contactPage.form.fields.name.label}
                  </Label>
                  <Input
                    id="name"
                    placeholder={contactPage.form.fields.name.placeholder}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {contactPage.form.fields.email.label}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={contactPage.form.fields.email.placeholder}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">
                  {contactPage.form.fields.subject.label}
                </Label>
                <Input
                  id="subject"
                  placeholder={contactPage.form.fields.subject.placeholder}
                  required
                  className="mt-1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  {contactPage.form.fields.message.label}
                </Label>
                <Textarea
                  id="message"
                  placeholder={contactPage.form.fields.message.placeholder}
                  rows={6}
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                {contactPage.form.submitLabel}
                <Icon.Send className="ml-1.5 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
