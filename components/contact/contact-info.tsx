"use client";

import { useI18n } from "@/lib/i18n/context";
import { contactInfo, socialLinks } from "@/lib/data/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Send,
  MessageCircle,
  Linkedin,
  ArrowUpRight
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Send,
  MessageCircle,
  Linkedin
};

export function ContactInfo() {
  const { t } = useI18n();

  const contactDetails = [
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`
    },
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: MapPin,
      label: t("contact.info.address"),
      value: `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.country}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.country}`
      )}`
    },
    {
      icon: Clock,
      label: t("contact.info.hours"),
      value: contactInfo.businessHours,
      href: null
    }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={
                      detail.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Contact Card */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="font-serif text-2xl">
            {t("contact.quickContact")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            asChild
            variant="outline"
            className="w-full justify-between rounded-lg"
          >
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-600" />
                WhatsApp
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full justify-between rounded-lg"
          >
            <a
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4 text-blue-500" />
                Telegram
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full justify-between rounded-lg"
          >
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-pink-600" />
                Instagram
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Map Placeholder */}
      <Card className="border-border bg-card overflow-hidden py-0">
        <div className="relative aspect-video bg-muted">
          <div className="relative aspect-video bg-muted">
            <iframe
              src="https://www.google.com/maps?q=Махамбета+Утемисова+109,+Атырау,+Казахстан&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atyrau Location"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
