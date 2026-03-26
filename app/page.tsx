import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section";
import { TestimonialsPreviewSection } from "@/components/sections/testimonials-preview-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioPreviewSection />
        <TestimonialsPreviewSection />
        <FAQSection />
        <CTASection />
        <section className="my-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
            Разработка сайтов в Атырау
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Мы занимаемся разработкой сайтов в Атырау и по всему Казахстану.
            Создаём современные лендинги, сайты для бизнеса и интернет-магазины
            под ключ. Наши решения помогают привлекать клиентов, увеличивать
            продажи и развивать ваш бизнес в интернете.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
