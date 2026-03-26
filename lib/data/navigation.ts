export interface NavItem {
  labelKey: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.portfolio", href: "/portfolio" },
  { labelKey: "nav.reviews", href: "/reviews" },
  { labelKey: "nav.contact", href: "/contact" },
];

export const footerNavigation = {
  main: [
    { labelKey: "nav.home", href: "/" },
    { labelKey: "nav.portfolio", href: "/portfolio" },
    { labelKey: "nav.reviews", href: "/reviews" },
    { labelKey: "nav.contact", href: "/contact" },
  ],
  services: [
    { label: "Web Design", href: "/#services" },
    { label: "E-Commerce", href: "/#services" },
    { label: "Mobile Apps", href: "/#services" },
    { label: "Branding", href: "/#services" },
  ],
  legal: [
    { labelKey: "footer.privacy", href: "/privacy" },
    { labelKey: "footer.terms", href: "/terms" },
  ],
};
