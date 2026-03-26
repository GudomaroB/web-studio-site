"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle, Briefcase, Award, Users } from "lucide-react";

const trustBadges = [
  { icon: Briefcase, labelKey: "trust.projects" },
  { icon: Users, labelKey: "trust.clients" },
  { icon: CheckCircle, labelKey: "trust.experience" },
  { icon: Award, labelKey: "trust.awards" },
];

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            {t("hero.badge")}
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up stagger-1 mt-8 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            {t("hero.title")}
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up stagger-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up stagger-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group rounded-full px-8">
              <Link href="/contact">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              <Link href="/portfolio">{t("hero.cta.secondary")}</Link>
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="animate-fade-up stagger-4 mt-16 w-full md:mt-24">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.labelKey}
                className={`flex flex-col items-center gap-2 rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm md:p-6 animate-fade-up stagger-${index + 1}`}
              >
                <badge.icon className="h-6 w-6 text-primary md:h-8 md:w-8" />
                <span className="text-sm font-medium text-foreground md:text-base">
                  {t(badge.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
