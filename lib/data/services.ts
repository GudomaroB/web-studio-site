export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  features: string[];
}

// export const services: Service[] = [
//   {
//     id: "web-design",
//     icon: "Layout",
//     titleKey: "Web Design & Development",
//     descriptionKey: "Custom websites that captivate your audience and drive conversions with cutting-edge design and seamless functionality.",
//     features: ["Responsive Design", "UI/UX Design", "Custom CMS", "Performance Optimization"],
//   },
//   {
//     id: "ecommerce",
//     icon: "ShoppingBag",
//     titleKey: "E-Commerce Solutions",
//     descriptionKey: "Powerful online stores built to scale your business with secure payments and intuitive shopping experiences.",
//     features: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Analytics Dashboard"],
//   },
//   {
//     id: "mobile-apps",
//     icon: "Smartphone",
//     titleKey: "Mobile Applications",
//     descriptionKey: "Native and cross-platform mobile apps that deliver exceptional user experiences on any device.",
//     features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
//   },
//   {
//     id: "branding",
//     icon: "Palette",
//     titleKey: "Brand Identity",
//     descriptionKey: "Comprehensive branding solutions that define your unique identity and resonate with your target audience.",
//     features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
//   },
//   {
//     id: "seo",
//     icon: "TrendingUp",
//     titleKey: "SEO & Marketing",
//     descriptionKey: "Data-driven strategies to improve your online visibility and attract qualified leads to your business.",
//     features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics & Reporting"],
//   },
//   {
//     id: "support",
//     icon: "HeadphonesIcon",
//     titleKey: "Support & Maintenance",
//     descriptionKey: "Ongoing support and maintenance to keep your digital assets running smoothly and securely.",
//     features: ["24/7 Support", "Security Updates", "Performance Monitoring", "Regular Backups"],
//   },
// ];

export const services: Service[] = [
  {
    id: "web-design",
    icon: "Layout",
    titleKey: "Разработка сайтов",
    descriptionKey:
      "Создаём современные и удобные сайты, которые привлекают клиентов и увеличивают продажи.",
    features: [
      "Адаптивный дизайн",
      "UI/UX дизайн",
      "Система управления (CMS)",
      "Оптимизация скорости"
    ]
  },
  {
    id: "ecommerce",
    icon: "ShoppingBag",
    titleKey: "Интернет-магазины",
    descriptionKey:
      "Разрабатываем онлайн-магазины с удобной оплатой и высокой конверсией.",
    features: [
      "Каталог товаров",
      "Онлайн-оплата",
      "Управление заказами",
      "Аналитика"
    ]
  },
  {
    id: "mobile-apps",
    icon: "Smartphone",
    titleKey: "Веб-приложения",
    descriptionKey:
      "Создаём сложные веб-сервисы и приложения под задачи бизнеса.",
    features: [
      "Личный кабинет",
      "Интеграции",
      "API разработка",
      "Высокая производительность"
    ]
  },
  {
    id: "branding",
    icon: "Palette",
    titleKey: "Дизайн и брендинг",
    descriptionKey:
      "Разрабатываем визуальный стиль, который выделяет ваш бизнес.",
    features: [
      "Логотип",
      "Фирменный стиль",
      "Дизайн интерфейсов",
      "Маркетинговые материалы"
    ]
  },
  {
    id: "seo",
    icon: "TrendingUp",
    titleKey: "SEO и продвижение",
    descriptionKey: "Помогаем сайту привлекать клиентов через поиск и рекламу.",
    features: ["SEO оптимизация", "Контент", "Аналитика", "Рост трафика"]
  },
  {
    id: "support",
    icon: "HeadphonesIcon",
    titleKey: "Поддержка сайтов",
    descriptionKey: "Обеспечиваем стабильную работу сайта и его развитие.",
    features: ["Техподдержка", "Обновления", "Мониторинг", "Резервные копии"]
  }
];
