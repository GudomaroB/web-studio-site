export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  features: string[];
}

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
