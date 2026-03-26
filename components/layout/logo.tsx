import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span className="font-serif text-2xl font-bold tracking-wide text-foreground">
        Gudomarov
      </span>
    </Link>
  );
}
