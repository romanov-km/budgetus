import React from "react";
import "./CategoryScreen.scss";
import Icon from "../../components/ui/Icon";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { categories } from "../../mock/mockData";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import { useNavigate } from "react-router-dom";

const CategoriesScreen: React.FC = () => {
    const navigate = useNavigate();
    
    return (
      <div className="categories-screen">
        <div className="categories-screen__header">
       <button className="back-button" onClick={() => navigate(-1)}>
        <Icon name="chevron-left" />
       </button>
        <h1 className="categories-screen__title">Категории</h1>
        
        </div>
        <AddCardButton />
        <div className="categories-screen__grid">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
  
        <BottomNavBar />
      </div>
    );
  };
  
  export default CategoriesScreen;