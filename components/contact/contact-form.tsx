"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { serviceOptions, budgetOptions } from "@/lib/data/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const company = formData.get("company")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          service,
          budget,
          message
        })
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-border bg-card">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Ваше сообщение отправлено!
          </h3>
          <p className="text-muted-foreground">
            Спасибо за вашу заявку! Мы свяжемся с вами в течение 24 часов.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.form.name")}</Label>
              <Input
                id="name"
                name="name"
                placeholder="Василий"
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.form.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="gudomarov@mail.ru"
                required
                className="bg-background"
              />
            </div>
          </div>

          {/* Phone and Company Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">{t("contact.form.phone")}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 705 393 94 48"
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t("contact.form.company")}</Label>
              <Input
                id="company"
                name="company"
                placeholder="Company Inc."
                className="bg-background"
              />
            </div>
          </div>

          {/* Service and Budget Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="service">{t("contact.form.service")}</Label>
              <Select onValueChange={setService}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">{t("contact.form.budget")}</Label>
              <Select onValueChange={setBudget}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Опишите ваш проект, цели и желаемые сроки реализации..."
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                {t("contact.form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
