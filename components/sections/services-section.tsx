"use client";

import { useI18n } from "@/lib/i18n/context";
import { services } from "@/lib/data/services";
import { getIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <Section id="services" background="muted">
      <Container>
        <SectionHeader
          badgeKey="services.badge"
          titleKey="services.title"
          subtitleKey="services.subtitle"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    {Icon && (
                      <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {service.titleKey}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.descriptionKey}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
