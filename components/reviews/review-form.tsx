"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReviewForm() {
  const { t } = useI18n();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const review = formData.get("review")?.toString().trim() || "";

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          content: review,
          rating
        })
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке отзыва");
      }

      form.reset();
      setRating(0);
      setHoveredRating(0);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Container size="small">
        <Card className="border-border bg-card">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Star className="h-8 w-8 text-primary fill-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Спасибо!
            </h3>
            <p className="text-muted-foreground">
              Ваш отзыв отправлен на модерацию и появится на сайте после
              проверки.
            </p>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="small">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-center font-serif text-2xl">
            {t("reviews.form.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Company Row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t("reviews.form.name")}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t("reviews.form.company")}</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Компания"
                  className="bg-background"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <Label>{t("reviews.form.rating")}</Label>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i + 1)}
                    onMouseEnter={() => setHoveredRating(i + 1)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1 transition-transform hover:scale-110 focus:outline-none"
                    aria-label={`Rate ${i + 1} stars`}
                  >
                    <Star
                      className={cn(
                        "h-8 w-8 transition-colors",
                        i < (hoveredRating || rating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div className="space-y-2">
              <Label htmlFor="review">{t("reviews.form.review")}</Label>
              <Textarea
                id="review"
                name="review"
                placeholder="Коммента́рий..."
                required
                rows={5}
                className="bg-background resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={isSubmitting || rating === 0}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  {t("reviews.form.submit")}
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
