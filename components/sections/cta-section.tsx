"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const { t } = useI18n();

  return (
    <Section background="muted" padding="large">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-12 md:py-24">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              {t("cta.title")}
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              {t("cta.subtitle")}
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group mt-10 rounded-full px-8"
            >
              <Link href="/contact">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
