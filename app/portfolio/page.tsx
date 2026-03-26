import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of premium web design, e-commerce, mobile apps, and branding projects. See how we've helped businesses transform their digital presence.",
  openGraph: {
    title: "Portfolio | WebStudio",
    description:
      "Explore our portfolio of premium web design, e-commerce, mobile apps, and branding projects.",
    images: ["/og-portfolio.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section padding="large">
          <SectionHeader
            badgeKey="portfolio.badge"
            titleKey="portfolio.title"
            subtitleKey="portfolio.subtitle"
          />
          <PortfolioGrid />
        </Section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
