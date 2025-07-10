import { useEffect, useState } from "react";
import { getCategories } from "../CategoryStore"; // IndexedDB
import type { Category } from "../CategoryStore";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};
