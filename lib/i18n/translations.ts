import type { Locale } from "./config";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.cta": "Start a Project",

    // Hero
    "hero.badge": "Turnkey websites",
    "hero.title": "We create modern websites for business.",
    "hero.subtitle":
      "We develop stylish and user-friendly websites that attract customers and strengthen your business",
    "hero.cta.primary": "Start Your Project",
    "hero.cta.secondary": "View Our Work",

    // Trust badges
    "trust.projects": "10+ Projects",
    "trust.clients": "Individual approach",
    "trust.experience": "Заманауи дизайн",
    "trust.awards": "Post-launch support",

    // Services
    "services.badge": "What We Do",
    "services.title": "We develop websites tailored to business needs",
    "services.subtitle":
      "We create modern websites and web solutions that help attract customers and grow your business",

    // Why us
    "why.badge": "Our advantages",
    "why.title":
      "We create websites that help businesses grow and attract customers",
    "why.subtitle":
      "We develop convenient and effective websites tailored to your business needs",

    // Process
    "process.badge": "Our Process",
    "process.title": "How the work process goes",
    "process.subtitle":
      "A simple and clear workflow from idea to website launch",

    // Portfolio
    "portfolio.badge": "Our Work",
    "portfolio.title": "Examples of our projects",
    "portfolio.subtitle":
      "A few examples of websites we developed for different needs and niches",
    "portfolio.viewAll": "View All Projects",
    "portfolio.viewProject": "View Project",
    "portfolio.filter.all": "All",
    "portfolio.filter.web": "Web Design",
    "portfolio.filter.ecommerce": "E-Commerce",
    "portfolio.filter.mobile": "Mobile Apps",
    "portfolio.filter.branding": "Branding",

    // Testimonials
    "testimonials.badge": "Client Feedback",
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle":
      "Real feedback from real clients who trusted us with their digital presence",
    "testimonials.leaveReview": "Leave a Review",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle":
      "Find answers to common questions about our services and process",

    // CTA
    "cta.title": "Are you ready to discuss your project?",
    "cta.subtitle":
      "Leave a request — we will contact you and offer a solution tailored to your needs.",
    "cta.button": "Submit a request",

    // Contact
    "contact.badge": "Get in Touch",
    "contact.title": "Let's Talk",
    "contact.subtitle":
      "Ready to start your project? We'd love to hear from you",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.company": "Company Name",
    "contact.form.service": "Service Interested In",
    "contact.form.budget": "Project Budget",
    "contact.form.message": "Tell Us About Your Project",
    "contact.form.submit": "Send Message",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.address": "Address",
    "contact.info.hours": "Business Hours",
    "contact.quickContact": "Quick Contact",

    // Reviews page
    "reviews.badge": "Reviews",
    "reviews.title": "Client Reviews",
    "reviews.subtitle": "Hear from businesses we've helped succeed",
    "reviews.form.title": "Share Your Experience",
    "reviews.form.name": "Your Name",
    "reviews.form.company": "Company",
    "reviews.form.rating": "Rating",
    "reviews.form.review": "Your Review",
    "reviews.form.submit": "Submit Review",

    // Footer
    "footer.description":
      "We create modern websites and services that strengthen your brand and deliver real results.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.social": "Follow Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "All rights reserved.",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.learnMore": "Learn More",
    "common.readMore": "Read More"
  },

  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.portfolio": "Портфолио",
    "nav.reviews": "Отзывы",
    "nav.contact": "Контакты",
    "nav.cta": "Обсудить проект",

    // Hero
    "hero.badge": "Сайты под ключ",
    "hero.title": "Создаём современные сайты для бизнеса",
    "hero.subtitle":
      "Разрабатываем стильные и удобные сайты, которые привлекают клиентов и усиливают ваш бизнес.",
    "hero.cta.primary": "Обсудить проект",
    "hero.cta.secondary": "Наши работы",

    // Trust badges
    "trust.projects": "10+ проектов",
    "trust.clients": "Индивидуальный подход",
    "trust.experience": "Современный дизайн",
    "trust.awards": "Поддержка после запуска",

    // Services
    "services.badge": "Наши услуги",
    "services.title": "Разрабатываем сайты под задачи бизнеса",
    "services.subtitle":
      "Создаём современные сайты и веб-решения, которые помогают привлекать клиентов и развивать бизнес.",

    // Why us
    "why.badge": "Наши преимущества",
    "why.title":
      "Создаём сайты, которые помогают бизнесу расти и привлекать клиентов",
    "why.subtitle":
      "Разрабатываем удобные и эффективные сайты под задачи вашего бизнеса.",

    // Process
    "process.badge": "Наш процесс",
    "process.title": "Как проходит работа",
    "process.subtitle":
      "Простой и понятный процесс работы от идеи до запуска сайта.",

    // Portfolio
    "portfolio.badge": "Наши работы",
    "portfolio.title": "Примеры наших проектов",
    "portfolio.subtitle":
      "Несколько примеров сайтов, которые мы разработали для разных задач и ниш.",
    "portfolio.viewAll": "Все проекты",
    "portfolio.viewProject": "Смотреть проект",
    "portfolio.filter.all": "Все",
    "portfolio.filter.web": "Веб-дизайн",
    "portfolio.filter.ecommerce": "E-Commerce",
    "portfolio.filter.mobile": "Мобильные приложения",
    "portfolio.filter.branding": "Брендинг",

    // Testimonials
    "testimonials.badge": "Отзывы клиентов",
    "testimonials.title": "Что говорят наши клиенты",
    "testimonials.subtitle":
      "Реальные отзывы от реальных клиентов, доверивших нам своё цифровое присутствие",
    "testimonials.leaveReview": "Оставить отзыв",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Часто задаваемые вопросы",
    "faq.subtitle":
      "Найдите ответы на распространённые вопросы о наших услугах и процессе работы",

    // CTA
    "cta.title": "Готовы обсудить ваш проект?",
    "cta.subtitle":
      "Оставьте заявку — свяжемся с вами и предложим решение под ваши задачи.",
    "cta.button": "Оставить заявку",

    // Contact
    "contact.badge": "Связаться",
    "contact.title": "Давайте поговорим",
    "contact.subtitle": "Готовы начать проект? Мы будем рады услышать вас",
    "contact.form.name": "Ваше имя",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.company": "Компания",
    "contact.form.service": "Интересующая услуга",
    "contact.form.budget": "Бюджет проекта",
    "contact.form.message": "Расскажите о вашем проекте",
    "contact.form.submit": "Отправить",
    "contact.info.phone": "Телефон",
    "contact.info.email": "Email",
    "contact.info.address": "Адрес",
    "contact.info.hours": "Часы работы",
    "contact.quickContact": "Быстрая связь",

    // Reviews page
    "reviews.badge": "Отзывы",
    "reviews.title": "Отзывы клиентов",
    "reviews.subtitle":
      "Узнайте от компаний, которым мы помогли добиться успеха",
    "reviews.form.title": "Поделитесь своим опытом",
    "reviews.form.name": "Ваше имя",
    "reviews.form.company": "Компания",
    "reviews.form.rating": "Оценка",
    "reviews.form.review": "Ваш отзыв",
    "reviews.form.submit": "Отправить отзыв",

    // Footer
    "footer.description":
      "Создаём современные сайты и сервисы, которые усиливают ваш бренд и дают реальный результат.",
    "footer.navigation": "Навигация",
    "footer.services": "Услуги",
    "footer.contact": "Контакты",
    "footer.social": "Мы в соцсетях",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.copyright": "Все права защищены.",

    // Common
    "common.loading": "Загрузка...",
    "common.error": "Что-то пошло не так",
    "common.learnMore": "Узнать больше",
    "common.readMore": "Читать далее"
  },

  kk: {
    // Navigation
    "nav.home": "Басты бет",
    "nav.portfolio": "Портфолио",
    "nav.reviews": "Пікірлер",
    "nav.contact": "Байланыс",
    "nav.cta": "Жобаны бастау",

    // Hero
    "hero.badge": "Сайттарды толықтай әзірлейміз",
    "hero.title": "Бизнеске арналған заманауи сайттар жасаймыз",
    "hero.subtitle":
      "Клиенттерді тартатын және бизнесіңізді күшейтетін стильді әрі ыңғайлы сайттар әзірлейміз",
    "hero.cta.primary": "Жобаны бастау",
    "hero.cta.secondary": "Жұмыстарымыз",

    // Trust badges
    "trust.projects": "10+ жоба",
    "trust.clients": "Жеке тәсіл",
    "trust.experience": "Заманауи дизайн",
    "trust.awards": "Іске қосылғаннан кейінгі қолдау",

    // Services
    "services.badge": "Қызметтеріміз",
    "services.title": "Бизнес міндеттеріне сай сайттар әзірлейміз",
    "services.subtitle":
      "Клиенттерді тартуға және бизнесті дамытуға көмектесетін заманауи сайттар мен веб-шешімдер жасаймыз",

    // Why us
    "why.badge": "Біздің артықшылықтарымыз",
    "why.title":
      "Бизнестің өсуіне және клиенттерді тартуға көмектесетін сайттар жасаймыз",
    "why.subtitle":
      "Сіздің бизнесіңізге сай ыңғайлы әрі тиімді сайттар әзірлейміз",

    // Process
    "process.badge": "Біздің процесс",
    "process.title": "Жұмыс қалай өтеді",
    "process.subtitle":
      "Идеядан сайтты іске қосуға дейінгі қарапайым әрі түсінікті жұмыс процесі",

    // Portfolio
    "portfolio.badge": "Жұмыстарымыз",
    "portfolio.title": "Біздің жобаларымыздың мысалдары",
    "portfolio.subtitle":
      "Әртүрлі міндеттер мен нишалар үшін әзірлеген сайттарымыздың бірнеше мысалдары",
    "portfolio.viewAll": "Барлық жобалар",
    "portfolio.viewProject": "Жобаны көру",
    "portfolio.filter.all": "Барлығы",
    "portfolio.filter.web": "Веб-дизайн",
    "portfolio.filter.ecommerce": "E-Commerce",
    "portfolio.filter.mobile": "Мобильді қосымшалар",
    "portfolio.filter.branding": "Брендинг",

    // Testimonials
    "testimonials.badge": "Клиент пікірлері",
    "testimonials.title": "Клиенттеріміз не айтады",
    "testimonials.subtitle":
      "Сандық болмысын бізге сеніп тапсырған нақты клиенттердің нақты пікірлері",
    "testimonials.leaveReview": "Пікір қалдыру",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Жиі қойылатын сұрақтар",
    "faq.subtitle":
      "Біздің қызметтер мен жұмыс процесі туралы жиі қойылатын сұрақтарға жауап табыңыз",

    // CTA
    "cta.title": "Жобаңызды талқылауға дайынсыз ба?",
    "cta.subtitle":
      "Өтінім қалдырыңыз — сізбен байланысып, міндеттеріңізге сәйкес шешім ұсынамыз.",
    "cta.button": "Өтінім қалдыру",

    // Contact
    "contact.badge": "Байланыс",
    "contact.title": "Сөйлесейік",
    "contact.subtitle":
      "Жобаңызды бастауға дайынсыз ба? Сізден хабар алуға қуаныштымыз",
    "contact.form.name": "Сіздің атыңыз",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.company": "Компания",
    "contact.form.service": "Қызықтыратын қызмет",
    "contact.form.budget": "Жоба бюджеті",
    "contact.form.message": "Жобаңыз туралы айтыңыз",
    "contact.form.submit": "Жіберу",
    "contact.info.phone": "Телефон",
    "contact.info.email": "Email",
    "contact.info.address": "Мекенжай",
    "contact.info.hours": "Жұмыс уақыты",
    "contact.quickContact": "Жылдам байланыс",

    // Reviews page
    "reviews.badge": "Пікірлер",
    "reviews.title": "Клиент пікірлері",
    "reviews.subtitle": "Біз табысқа жетуге көмектескен компаниялардан естіңіз",
    "reviews.form.title": "Тәжірибеңізбен бөлісіңіз",
    "reviews.form.name": "Сіздің атыңыз",
    "reviews.form.company": "Компания",
    "reviews.form.rating": "Баға",
    "reviews.form.review": "Сіздің пікіріңіз",
    "reviews.form.submit": "Пікір жіберу",

    // Footer
    "footer.description":
      "Біз сіздің брендіңізді күшейтіп, нақты нәтиже беретін заманауи сайттар мен сервистер жасаймыз.",
    "footer.navigation": "Навигация",
    "footer.services": "Қызметтер",
    "footer.contact": "Байланыс",
    "footer.social": "Біз әлеуметтік желілерде",
    "footer.privacy": "Құпиялылық саясаты",
    "footer.terms": "Қызмет көрсету шарттары",
    "footer.copyright": "Барлық құқықтар қорғалған.",

    // Common
    "common.loading": "Жүктелуде...",
    "common.error": "Бірдеңе дұрыс болмады",
    "common.learnMore": "Көбірек білу",
    "common.readMore": "Толығырақ оқу"
  }
};
