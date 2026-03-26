"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import { portfolioProjects } from "@/lib/data/portfolio";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function PortfolioPreviewSection() {
  const { t } = useI18n();
  const featuredProjects = portfolioProjects
    .filter((p) => p.featured)
    .slice(0, 4);

  return (
    <Section id="portfolio">
      <Container>
        <SectionHeader
          badgeKey="portfolio.badge"
          titleKey="portfolio.title"
          subtitleKey="portfolio.subtitle"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />

                  <div className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.categoryLabel}
                  </Badge>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full px-8"
          >
            <Link href="/portfolio">
              {t("portfolio.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
