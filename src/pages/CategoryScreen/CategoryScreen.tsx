import React, { useEffect, useState } from "react";
import "./CategoryScreen.scss";
import Icon from "../../components/ui/Icon";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { mockCategories } from "../../mock/mockData";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import { useNavigate } from "react-router-dom";
import AddCategoryModal from "../../components/AddCategoryModal/AddCategoryModal";

type Category = {
  name: string;
  icon: string;
  color: string;
};

const CategoriesScreen: React.FC = () => {
    const navigate = useNavigate();
    const [showCategory, setShowCategory] = useState(false);

    // Инициализация из моков или localStorage
    const [categories, setCategories] = useState(() => {
      const stored = localStorage.getItem("categories");
      return stored ? JSON.parse(stored) : mockCategories;
    });

    useEffect(() => {
      localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);
  
    const handleAddCategory = (newCategory: { name: string; icon: string }) => {
      if (
        newCategory.name.trim() &&
        !categories.find((c: Category) => c.name === newCategory.name)
      ) {
        setCategories([...categories, newCategory]);
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