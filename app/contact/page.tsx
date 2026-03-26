import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WebStudio for your web design, development, and branding needs. We'd love to hear about your project and discuss how we can help.",
  openGraph: {
    title: "Contact Us | WebStudio",
    description:
      "Get in touch with WebStudio for your web design, development, and branding needs.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section padding="large">
          <Container>
            <SectionHeader
              badgeKey="contact.badge"
              titleKey="contact.title"
              subtitleKey="contact.subtitle"
            />

            <div className="grid gap-8 lg:grid-cols-5">
              {/* Contact Form - Takes more space */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
