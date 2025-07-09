import React, { useEffect, useState } from "react";
import "./CategoryScreen.scss";
import Icon from "../../components/ui/Icon";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import { useNavigate } from "react-router-dom";
import AddCategoryModal from "../../components/AddCategoryModal/AddCategoryModal";
import { createCategory } from "../../utils/auth";
import { addCategory, getCategories } from "../../utils/CategoryStore";
import type { Category } from "../../utils/CategoryStore";

const CategoriesScreen: React.FC = () => {
    const navigate = useNavigate();
    const [showCategory, setShowCategory] = useState(false);

    // Инициализация из IndexedDB
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
      getCategories().then((data) => {
        if (data.length === 0) {
          // если IndexedDB пуста — загрузим моковые категории
          setCategories(categories);
          categories.forEach(addCategory); // сохраним их в IndexedDB
        } else {
          setCategories(data);
        }
      });
    }, []);
    
  
    const handleAddCategory = async (newCategory: { name: string; icon: string; color: string }) => {
      if (
        newCategory.name.trim() &&
        !categories.find((c: Category) => c.name === newCategory.name)
      ) {
        try {
          // отправляем только name и icon на сервер
          await createCategory({
            name: newCategory.name,
            icon: newCategory.icon,
          }); // API
    
          await addCategory(newCategory); // IndexedDB
          setCategories((prev) => [...prev, newCategory]); // State
          
        } catch (error) {
          alert("Ошибка при создании категории");
          console.error(error);
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
        <div className="categories-screen__grid">
          {categories.map((category: Category, index: number) => (
            <CategoryCard key={index} {...category}/>
          ))}
        </div>
  
        <BottomNavBar />
      </div>
    );
  };
  
  export default CategoriesScreen;