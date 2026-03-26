export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: "web" | "ecommerce" | "mobile" | "branding";
  categoryLabel: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  technologies: string[];
  client: string;
  year: string;
  link?: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "evgenia-furniture",
    title: "Evgenia Furniture",
    category: "ecommerce",
    categoryLabel: "Web Design",
    description:
      "Website for a furniture company with catalog and lead generation.",
    fullDescription:
      "Developed a modern website for a furniture company, focusing on showcasing products, improving user experience, and increasing customer inquiries. Implemented clean design, responsive layout, and optimized performance for better engagement.",
    imageUrl: "/portfolio/ev1.webp",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit"],
    client: "Evgenia Furniture",
    year: "2024",
    link: "https://evgeniafurniture.com/",
    featured: true
  }
];

export const portfolioCategories = [
  { id: "all", labelKey: "portfolio.filter.all" },
  { id: "web", labelKey: "portfolio.filter.web" },
  { id: "ecommerce", labelKey: "portfolio.filter.ecommerce" },
  { id: "mobile", labelKey: "portfolio.filter.mobile" },
  { id: "branding", labelKey: "portfolio.filter.branding" }
] as const;
