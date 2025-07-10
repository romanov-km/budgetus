import { createContext, useContext, useEffect, useState } from "react";
import { getCategories, addCategory } from "../utils/CategoryStore";

export interface Category {
  name: string;
  icon: string;
  color: string;
}

interface CategoryContextType {
  categories: Category[];
  refreshCategories: () => Promise<void>;
  addNewCategory: (category: Category) => Promise<void>;
}

const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  refreshCategories: async () => {},
  addNewCategory: async () => {},
});

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const refreshCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const addNewCategory = async (category: Category) => {
    await addCategory(category);
    await refreshCategories(); // чтобы обновить UI
  };

  useEffect(() => {
    refreshCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, refreshCategories, addNewCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
