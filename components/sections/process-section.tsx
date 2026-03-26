"use client";

import { useI18n } from "@/lib/i18n/context";
import { processSteps } from "@/lib/data/process";
import { getIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export function ProcessSection() {
  const { t } = useI18n();

  return (
    <Section id="process" background="muted">
      <Container>
        <SectionHeader
          badgeKey="process.badge"
          titleKey="process.title"
          subtitleKey="process.subtitle"
        />

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="grid gap-8 lg:gap-0">
            {processSteps.map((step, index) => {
              const Icon = getIcon(step.icon);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col items-center gap-6 lg:flex-row lg:gap-12 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 rounded-2xl border border-border bg-card p-6 md:p-8 ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 ${
                        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 lg:hidden">
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">
                          Шаг {step.number}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Icon - Desktop */}
                  <div className="relative z-10 hidden h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg lg:flex">
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>

                  {/* Empty Space for Layout */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
