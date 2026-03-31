import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'd love to hear about your project or idea.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="max-w-lg">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mb-10 text-xl text-muted-foreground">
          Have a project in mind or just want to say hi? Fill out the form and
          I&apos;ll get back to you.
        </p>
        <ContactForm />
      </div>
    </PageContainer>
  );
}
