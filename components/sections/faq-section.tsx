"use client";

import { useI18n } from "@/lib/i18n/context";
import { faqItems } from "@/lib/data/faq";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const { t } = useI18n();

  return (
    <Section id="faq">
      <Container size="small">
        <SectionHeader
          badgeKey="faq.badge"
          titleKey="faq.title"
          subtitleKey="faq.subtitle"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-medium text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
