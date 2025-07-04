import React, { useState } from "react";
import "./StatisticScreen.scss";
import Icon from "../../components/ui/Icon";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { useNavigate } from "react-router-dom";
import FilterSelect from "../../components/FilterSelect/FilterSelect";

const StatisticScreen: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Все операции");
  const [filterMonth, setFilterMonth] = useState("Этот месяц");

  return (
    <div className="statistic-screen">
      <div className="statistic-screen__header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <Icon name="chevron-left" />
        </button>
        <h1 className="statistic-screen__title">Статистика</h1>
     
      </div>

      <div className="statistic-screen__main">
      <FilterSelect
          options={["Все операции", "Доходы", "Расходы"]}
          value={filter}
          onChange={setFilter}
        />
           <FilterSelect
          options={["Этот месяц", "Январь", "Март"]}
          value={filterMonth}
          onChange={setFilterMonth}
        />
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default StatisticScreen;
