export const goals = [
    {
      iconName: 'car',
      title: 'Автомобиль',
      subtitle: 'Цель: 2 000 000 ₽',
      percent: 50,
    },
    {
      iconName: 'home-alt',
      title: 'Квартира',
      subtitle: 'Цель: 5 000 000 ₽',
      percent: 10,
    },
  ];
    
  export const limits = [
  ];
  

  export const bankOptions = [
    { label: "Тинькофф", value: "tinkoff" },
    { label: "Сбербанк", value: "sber" },
  ];
  
  export const categoryOptions = [
    { label: "Продукты", value: "groceries" },
    { label: "Транспорт", value: "transport" },
  ];

  export const mockCategories = [
    { name: "супермаркет", icon: "shopping-cart", color: "#FFD9A0", badge: 10 },
    { name: "транспорт", icon: "tour-bus", color: "#BDB6FF" },
    { name: "зоотовары", icon: "bone", color: "#69D6FF" },
    { name: "образование", icon: "bachelor-cap", color: "#7EFF9C" },
  ];

  export const mockUsers = [
    {
      username: '123',
      password: '123',
      name: 'Фиджи',
      email: 'lupapupa@gmail.com',
    },
    {
      username: 'admin',
      password: 'admin',
      name: 'Админ',
      email: 'admin@yandex.ru',
    },
  ];

  export type Transaction = {
    id: string;
    date: string;
    amount: number;
    category: string;
    bank: string;
    type: "Доход" | "Расход";
  };
  
  export const mockTransactions: Transaction[] = [];
  

  export const categoryMeta: Record<string, { icon: string; color: string }> = {
    "Супермаркет": { icon: "shopping-cart", color: "#FFD79C" },
    "Зоотовары": { icon: "bone", color: "#74D7FF" },
    "Образование": { icon: "bachelor-cap", color: "#7FFF9E" },
    "Транспорт": { icon: "car", color: "#B49CFF" },
    "Рестораны": { icon: "fork-knife", color: "#FFC4C4" },
    "Туризм": { icon: "tour-bus", color: "#C4FFE3" },
    "Авиа": { icon: "plane", color: "#E4D7FF" },
    "Прочее": { icon: "shopping-cart", color: "#EAEAEA" }
  };