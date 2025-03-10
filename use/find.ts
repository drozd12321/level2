import { MenuItem } from "@/interfaces/menu.interface";

export const menu: MenuItem[] = [
  {
    _id: { secondCategory: "Программирование" },
    pages: [
      {
        alias: "javascript-basics",
        title: "Основы JavaScript",
        _id: "course-1",
        category: "Программирование",
      },
      {
        alias: "python-advanced",
        title: "Продвинутый Python",
        _id: "course-2",
        category: "Программирование",
      },
      {
        alias: "java-oop",
        title: "Объектно-ориентированное программирование на Java",
        _id: "course-3",
        category: "Программирование",
      },
    ],
  },
  {
    _id: { secondCategory: "Маркетинг" },
    pages: [
      {
        alias: "digital-marketing",
        title: "Цифровой Маркетинг",
        _id: "course-4",
        category: "Маркетинг",
      },
      {
        alias: "seo-strategies",
        title: "SEO Стратегии",
        _id: "course-5",
        category: "Маркетинг",
      },
      {
        alias: "content-marketing",
        title: "Контентный Маркетинг",
        _id: "course-6",
        category: "Маркетинг",
      },
    ],
  },
  {
    _id: { secondCategory: "Дизайн" },
    pages: [
      {
        alias: "graphic-design-basics",
        title: "Основы Графического Дизайна",
        _id: "course-7",
        category: "Дизайн",
      },
      {
        alias: "ui-design-principles",
        title: "Принципы UI Дизайна",
        _id: "course-8",
        category: "Дизайн",
      },
      {
        alias: "motion-design",
        title: "Моушн-дизайн",
        _id: "course-9",
        category: "Дизайн",
      },
    ],
  },
  {
    _id: { secondCategory: "Менеджмент" },
    pages: [
      {
        alias: "project-management",
        title: "Управление Проектами",
        _id: "course-10",
        category: "Менеджмент",
      },
      {
        alias: "time-management",
        title: "Управление Временем",
        _id: "course-11",
        category: "Менеджмент",
      },
      {
        alias: "leadership-skills",
        title: "Навыки Лидерства",
        _id: "course-12",
        category: "Менеджмент",
      },
    ],
  },
  {
    _id: { secondCategory: "Финансы" },
    pages: [
      {
        alias: "financial-analysis",
        title: "Финансовый Анализ",
        _id: "course-13",
        category: "Финансы",
      },
      {
        alias: "investments",
        title: "Инвестиции",
        _id: "course-14",
        category: "Финансы",
      },
      {
        alias: "accounting-basics",
        title: "Основы Бухгалтерского Учета",
        _id: "course-15",
        category: "Финансы",
      },
    ],
  },
  {
    _id: { secondCategory: "Психология" },
    pages: [
      {
        alias: "cognitive-psychology",
        title: "Когнитивная Психология",
        _id: "course-16",
        category: "Психология",
      },
      {
        alias: "social-psychology",
        title: "Социальная Психология",
        _id: "course-17",
        category: "Психология",
      },
      {
        alias: "emotional-intelligence",
        title: "Эмоциональный Интеллект",
        _id: "course-18",
        category: "Психология",
      },
    ],
  },
  {
    _id: { secondCategory: "Бизнес" },
    pages: [
      {
        alias: "entrepreneurship",
        title: "Предпринимательство",
        _id: "course-19",
        category: "Бизнес",
      },
      {
        alias: "business-strategy",
        title: "Бизнес-стратегия",
        _id: "course-20",
        category: "Бизнес",
      },
      {
        alias: "innovation-management",
        title: "Управление Инновациями",
        _id: "course-21",
        category: "Бизнес",
      },
    ],
  },
];
