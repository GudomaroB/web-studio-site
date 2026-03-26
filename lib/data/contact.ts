export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  businessHours: string;
  whatsapp: string;
  telegram: string;
  instagram: string;
}

export const contactInfo: ContactInfo = {
  phone: "+7 (705) 393-9448",
  email: "vasya_180395@mail.ru",
  address: "Makhambet Utemisov",
  city: "Atyrau",
  country: "Kazakhstan",
  businessHours: "Mon - Fri: 9:00 AM - 6:00 PM",
  whatsapp: "+77053939448",
  telegram:
    "https://t.me/gudomarov?text=Добрый%20день,%20интересует%20разработка",
  instagram: "https://instagram.com/vassilyi.g"
};

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    name: "@vassilyi.g",
    url: contactInfo.instagram,
    icon: "Instagram"
  },
  {
    id: "telegram",
    name: "Telegram",
    url: contactInfo.telegram,
    icon: "Send"
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/87053939448",
    icon: "MessageCircle"
  }
];

export const serviceOptions = [
  { value: "web-design", label: "Разработка сайтов" },
  { value: "landing-page", label: "Лендинг" },
  { value: "business-website", label: "Сайт для бизнеса" },
  { value: "ecommerce", label: "Интернет-магазин" },
  { value: "website-redesign", label: "Редизайн сайта" },
  { value: "seo", label: "SEO-оптимизация" },
  { value: "support", label: "Поддержка и сопровождение" },
  { value: "other", label: "Другое" }
];

export const budgetOptions = [
  { value: "100k-150k", label: "100 000 ₸ – 150 000 ₸" },
  { value: "150k-300k", label: "150 000 ₸ – 300 000 ₸" },
  { value: "300k-500k", label: "300 000 ₸ – 500 000 ₸" },
  { value: "500k+", label: "500 000 ₸+" },
  { value: "not-sure", label: "Пока не знаю" }
];
