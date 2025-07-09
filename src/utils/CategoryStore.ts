import { initDB } from "./db";

export type Category = {
  name: string;
  icon: string;
  color: string;
};

export const addCategory = async (category: Category) => {
  const db = await initDB();
  await db.put("categories", category);
};

export const getCategories = async (): Promise<Category[]> => {
  const db = await initDB();
  return await db.getAll("categories");
};

export const removeCategory = async (name: string) => {
  const db = await initDB();
  await db.delete("categories", name);
};
