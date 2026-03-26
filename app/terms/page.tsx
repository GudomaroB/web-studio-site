import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using WebStudio's services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section padding="large">
          <Container size="small">
            <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Last updated: January 2024
              </p>
              
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                2. Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                WebStudio provides web design, development, branding, and related digital services. The specific scope of each project will be outlined in individual project agreements.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                3. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, clients receive ownership of deliverables as specified in the project agreement. WebStudio retains the right to showcase completed work in our portfolio.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                4. Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms and schedules are specified in individual project agreements. Late payments may result in project delays or suspension of services.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                WebStudio shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                6. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at hello@webstudio.com.
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
