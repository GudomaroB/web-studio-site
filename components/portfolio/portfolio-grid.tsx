"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { portfolioProjects, portfolioCategories } from "@/lib/data/portfolio";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function PortfolioGrid() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <Container>
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((category) => (
          <Button
            key={category.id}
            variant={activeFilter === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(category.id)}
            className={cn(
              "rounded-full transition-all",
              activeFilter === category.id
                ? ""
                : "border-border hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {t(category.labelKey)}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link href={`/portfolio/${project.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
                <div className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary">{project.categoryLabel}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}
    </Container>
  );
}
