import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ReviewsList } from "@/components/reviews/reviews-list";
import { ReviewForm } from "@/components/reviews/review-form";
import { CTASection } from "@/components/sections/cta-section";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what our clients say about working with WebStudio. Real testimonials from businesses we've helped succeed with our web design, development, and branding services.",
  openGraph: {
    title: "Client Reviews | WebStudio",
    description:
      "Read what our clients say about working with WebStudio. Real testimonials from businesses we've helped succeed.",
    images: ["/og-reviews.jpg"]
  }
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Reviews List Section */}
        <Section padding="large">
          <SectionHeader
            badgeKey="reviews.badge"
            titleKey="reviews.title"
            subtitleKey="reviews.subtitle"
          />
          <ReviewsList />
        </Section>

        {/* Leave Review Section */}
        <Section background="muted">
          <ReviewForm />
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
