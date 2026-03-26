import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/data/portfolio";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Building2 } from "lucide-react";
import Image from "next/image";
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.fullDescription,
    openGraph: {
      title: `${project.title} | WebStudio Portfolio`,
      description: project.description,
      images: [project.imageUrl]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section padding="large">
          <Container>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="mb-8 rounded-full"
            >
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Project Image */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image src={project.imageUrl} alt={project.title} fill />
              </div>
              {/* Project Info */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.categoryLabel}
                </Badge>
                <h1 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
                  {project.title}
                </h1>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Project Details */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium text-foreground">
                        {project.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium text-foreground">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {project.link && (
                  <Button asChild size="lg" className="rounded-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <Section background="muted">
            <Container>
              <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Related Projects
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.slug}`}
                    className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* <div className="relative aspect-[4/3] bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                        <span className="font-serif text-4xl font-bold text-primary/20">
                          {relatedProject.title[0]}
                        </span>
                      </div>
                    </div> */}
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedProject.categoryLabel}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        )}
      </main>
      <Footer />
    </>
  );
}
