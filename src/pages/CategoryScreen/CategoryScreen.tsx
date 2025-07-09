import React, { useEffect, useState } from "react";
import "./CategoryScreen.scss";
import Icon from "../../components/ui/Icon";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import { useNavigate } from "react-router-dom";
import AddCategoryModal from "../../components/AddCategoryModal/AddCategoryModal";
import type { Category } from "../../utils/CategoryStore";
import { useAuth } from "../../context/AuthContext";
import { addCategory, getCategories as getCategoriesFromIndexedDB } from "../../utils/CategoryStore";
import { createCategory as createCategoryOnServer, getCategories as getCategoriesFromServer } from "../../utils/auth";

const CategoriesScreen: React.FC = () => {
    const navigate = useNavigate();
    const [showCategory, setShowCategory] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    // Инициализация из IndexedDB

    useEffect(() => {
      const loadCategories = async () => {
        setLoading(true);
        try {
          const local = await getCategoriesFromIndexedDB();
          setCategories(local);
  
          if (!token) return;
  
          const server = await getCategoriesFromServer(token);
          const enriched = server.map((cat: Category) => {
            const localMatch = local.find((c) => c.name === cat.name);
            return {
              name: cat.name,
              icon: cat.icon,
              color: localMatch?.color ?? "#b9fe66",
            };
          });
  
          // сохранить новые или обновлённые категории в IndexedDB
          for (const category of enriched) {
            await addCategory(category);
          }
  
          setCategories(enriched);
        } catch (error) {
          console.error("Ошибка при загрузке категорий:", error);
        } finally {
          setLoading(false);
        }
      };
  
      loadCategories();
    }, [token]);
    
  
    const handleAddCategory = async (newCategory: Category) => {
      if (
        newCategory.name.trim() &&
        !categories.find((c) => c.name === newCategory.name)
      ) {
        try {
          // только name и icon отправляем на сервер
          await createCategoryOnServer(
            {
              name: newCategory.name,
              icon: newCategory.icon,
            },
            token ?? ""
          );
  
          await addCategory(newCategory); // IndexedDB
          setCategories((prev) => [...prev, newCategory]); // UI
        } catch (error) {
          console.error("Ошибка при создании категории", error);
          alert("Не удалось создать категорию");
        }
      }
    };
    
    return (
      
      <div className="categories-screen">
        <AddCategoryModal
        isOpen={showCategory}
        onClose={() => setShowCategory(false)}
        onAddCategory={handleAddCategory}
      />
        <div className="categories-screen__header">
       <button className="back-button" onClick={() => navigate(-1)}>
        <Icon name="chevron-left" />
       </button>
        <h1 className="categories-screen__title">Категории</h1>
        
        </div>
        <AddCardButton onClick={() => setShowCategory(true)}/>
        {loading ? (
  <p>Загрузка...</p>
) : (
  

        <div className="categories-screen__grid">
          {categories.map((category: Category, index: number) => (
            <CategoryCard key={index} {...category}/>
          ))}
        </div>
)}  
        <BottomNavBar />
      </div>
    );
  };
  
  export default CategoriesScreen;