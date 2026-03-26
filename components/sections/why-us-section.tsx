"use client";

import { useI18n } from "@/lib/i18n/context";
import { whyUsItems } from "@/lib/data/why-us";
import { getIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export function WhyUsSection() {
  const { t } = useI18n();

  return (
    <Section id="why-us">
      <Container>
        <SectionHeader
          badgeKey="why.badge"
          titleKey="why.title"
          subtitleKey="why.subtitle"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.id} className="group relative">
                <div className="flex flex-col items-start">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    {Icon && (
                      <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
