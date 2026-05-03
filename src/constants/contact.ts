import { Mail, MapPin, Phone } from "@/components/icons";
import { site } from "@/constants/site";

export const contactPage = {
  header: {
    eyebrow: "Contact Us",
    title: "Get in Touch",
    subtitle:
      "Questions about the research, collaboration, or access to deliverables - reach out via email, phone, or the form.",
  },
  responseNote: "We typically respond within two working days.",
  toast: {
    title: "Message captured",
    description:
      "This is a frontend-only demo - no message was actually sent.",
  },
  form: {
    title: "Send a message",
    submitLabel: "Send message",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your full name",
      },
      email: {
        label: "Email",
        placeholder: "you@example.com",
      },
      subject: {
        label: "Subject",
        placeholder: "What is this about?",
      },
      message: {
        label: "Message",
        placeholder: "Write your message here...",
      },
    },
  },
};

export const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: site.address,
    multiline: true,
  },
];
