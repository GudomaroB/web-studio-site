import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  padding?: "none" | "small" | "default" | "large";
  background?: "default" | "muted" | "card";
}

export function Section({
  children,
  className,
  id,
  padding = "default",
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        {
          "py-0": padding === "none",
          "py-12 md:py-16": padding === "small",
          "py-16 md:py-24": padding === "default",
          "py-24 md:py-32": padding === "large",
        },
        {
          "bg-background": background === "default",
          "bg-muted/50": background === "muted",
          "bg-card": background === "card",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
