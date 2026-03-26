"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { testimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, ArrowRight } from "lucide-react";

export function TestimonialsPreviewSection() {
  const { t } = useI18n();
  const featuredTestimonials = testimonials
    .filter((t) => t.featured)
    .slice(0, 3);

  return (
    <Section id="testimonials" background="muted">
      <Container>
        <SectionHeader
          badgeKey="testimonials.badge"
          titleKey="testimonials.title"
          subtitleKey="testimonials.subtitle"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-border">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
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
            <Link href="/reviews">
              {t("testimonials.leaveReview")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
