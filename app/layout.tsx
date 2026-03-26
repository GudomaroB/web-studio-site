import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/lib/theme/theme-provider";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Разработка сайтов в Атырау | WebStudio",
    template: "%s | WebStudio"
  },
  description:
    "Разработка сайтов в Атырау: лендинги, интернет-магазины и сайты для бизнеса. Создаем современные и быстрые сайты под ключ в Казахстане.",
  verification: {
    google: "utNdTKQctwRWGbYTBA08mdHl3EP8cjS6HnupZImNIFs"
  },

  keywords: [
    "разработка сайтов Атырау",
    "создание сайтов Казахстан",
    "лендинг Атырау",
    "интернет магазин Атырау",
    "сайт под ключ Казахстан",
    "веб студия Атырау"
  ],
  authors: [{ name: "WebStudio" }],
  creator: "WebStudio",
  publisher: "WebStudio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "https://web-studio-site.vercel.app/",
    siteName: "WebStudio",
    title: "Разработка сайтов в Атырау | WebStudio",
    description:
      "Создание сайтов под ключ в Атырау. Лендинги, интернет-магазины и сайты для бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebStudio - Premium Digital Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка сайтов в Атырау | WebStudio",
    description:
      "Создание сайтов под ключ в Атырау. Лендинги, интернет-магазины и сайты для бизнеса.",
    images: ["/og-image.jpg"],
    creator: "@webstudio"
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-icon.png"
  },
  manifest: "/manifest.json",
  alternates: {
    languages: {
      en: "/en",
      ru: "/ru",
      kk: "/kk"
    }
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WebStudio",
              url: "https://webstudio.com",
              logo: "https://webstudio.com/logo.png",
              description:
                "A premium web studio crafting innovative digital solutions for forward-thinking brands.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Digital Avenue, Suite 456",
                addressLocality: "Almaty",
                addressCountry: "Kazakhstan"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-777-123-4567",
                contactType: "customer service",
                availableLanguage: ["English", "Russian", "Kazakh"]
              },
              sameAs: [
                "https://instagram.com/webstudio",
                "https://t.me/webstudio",
                "https://linkedin.com/company/webstudio"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "WebStudio",
              url: "https://your-project.vercel.app",
              logo: "https://your-project.vercel.app/og-image.jpg",
              image: "https://your-project.vercel.app/og-image.jpg",
              description:
                "Разработка сайтов в Атырау: лендинги, интернет-магазины и сайты для бизнеса.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Махамбета Утемисова 109",
                addressLocality: "Атырау",
                addressCountry: "KZ"
              },
              areaServed: "Казахстан",
              telephone: "+77053939448",
              email: "gudomarov@mail.ru",
              sameAs: [
                "https://www.instagram.com/vassilyi.g/",
                "https://t.me/gudomarov"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
