"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";

interface SectionHeaderProps {
  badgeKey?: string;
  titleKey: string;
  subtitleKey?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badgeKey,
  titleKey,
  subtitleKey,
  badge,
  title,
  subtitle,
  align = "center",
  className
}: SectionHeaderProps) {
  const { t } = useI18n();

  const displayBadge = badge || (badgeKey ? t(badgeKey) : undefined);
  const displayTitle = title || t(titleKey);
  const displaySubtitle =
    subtitle || (subtitleKey ? t(subtitleKey) : undefined);

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        {
          "text-center": align === "center",
          "text-left": align === "left"
        },
        className
      )}
    >
      {displayBadge && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {displayBadge}
        </span>
      )}
      <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-4xl text-balance">
        {displayTitle}
      </h2>
      {displaySubtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground text-pretty",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {displaySubtitle}
        </p>
      )}
    </div>
  );
}
