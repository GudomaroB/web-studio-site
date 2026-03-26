export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Александр Иванов",
    role: "Директор",
    company: "TransLogistic",
    content:
      "Разработали современный лендинг для компании по аренде транспорта и найму водителей. Сайт получился быстрый, удобный и понятный для клиентов. Количество заявок заметно выросло уже в первый месяц после запуска.",
    avatarUrl: "/testimonials/avatar-1.jpg",
    rating: 5,
    featured: true
  },
  {
    id: "2",
    name: "Михаил Петров",
    role: "Маркетинг директор",
    company: "ShopLine",
    content:
      "После редизайна интернет-магазина значительно выросла конверсия и удобство использования. Команда сделала современный интерфейс, улучшила структуру каталога и ускорила загрузку сайта. Результатом полностью довольны.",
    avatarUrl: "/testimonials/avatar-2.jpg",
    rating: 4,
    featured: true
  }
];
