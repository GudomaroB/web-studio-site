export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    number: "1",
    title: "Анализ проекта",
    description:
      "Изучаем ваш бизнес, цели и задачи, чтобы предложить лучшее решение.",
    icon: "Search"
  },
  {
    id: "2",
    number: "2",
    title: "Планирование",
    description: "Продумываем структуру сайта, функционал и логику работы.",
    icon: "Lightbulb"
  },
  {
    id: "3",
    number: "3",
    title: "Дизайн",
    description: "Создаём современный и удобный дизайн под ваш бренд.",
    icon: "Palette"
  },
  {
    id: "4",
    number: "4",
    title: "Разработка",
    description: "Превращаем дизайн в быстрый и стабильный сайт.",
    icon: "Code"
  },
  {
    id: "5",
    number: "5",
    title: "Тестирование",
    description: "Проверяем сайт на всех устройствах и исправляем ошибки.",
    icon: "CheckCircle"
  },
  {
    id: "6",
    number: "6",
    title: "Запуск",
    description: "Запускаем сайт и при необходимости помогаем с поддержкой.",
    icon: "Rocket"
  }
];
