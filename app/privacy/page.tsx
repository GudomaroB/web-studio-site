import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how WebStudio collects, uses, and protects your personal information."
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section padding="large">
          <Container size="small">
            <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Last updated: January 2026
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when
                you fill out a contact form, request a quote, or communicate
                with us. This may include your name, email address, phone
                number, company name, and project details.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to respond to your inquiries,
                provide our services, send you updates about our work, and
                improve our website and services.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                necessary to provide our services or as required by law.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                5. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at vasya_180395@mail.ru.
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
