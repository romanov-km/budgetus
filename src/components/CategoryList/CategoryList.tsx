import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.scss";
import { categories } from "../../mock/mockData";


const CategoryList: React.FC = () => {
  return (
    <div className="category-list">
      {categories.map((category, i) => (
        <CategoryCard key={i} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
