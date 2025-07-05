import React, { useState } from "react";
import "./StatisticScreen.scss";
import Icon from "../../components/ui/Icon";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { useNavigate } from "react-router-dom";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import TopCategoryCard from "../../components/TopCategoryCard/TopCategoryCard";
import RadarStatsChart from "../../components/RadarStatsChart/RadarStatsChart";

const StatisticScreen: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Все операции");
  const [filterMonth, setFilterMonth] = useState("Этот месяц");
  const sampleData = [
    { name: "Доходы", value: 5, fill: "#b9fe66" },
    { name: "Траты", value: 7, fill: "#b9fe66" },
    { name: "Отложено", value: 10, fill: "#b9fe66" },
  ];

  return (
    <div className="statistic-screen">
      <div className="statistic-screen__header">
        <button className="back-button" onClick={() => navigate("/home")}>
          <Icon name="chevron-left" />
        </button>
        <div className="statistic-screen__progress">
          <h1 className="statistic-screen__title">Статистика</h1>
        </div>
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
      <div className="statistic-screen__analys">
        <h2 className="section-title">Прогресс</h2>
      </div>

      <RadarStatsChart data={sampleData} />
      <div className="statistic-screen__analys">
      <h2 className="section-title">Анализ</h2>
</div>
      <div className="statistic-screen__analyse">
        <TopCategoryCard title="Коммунальные услуги" />
        <TopCategoryCard title="" highlight="0%" subtitle="выход за лимиты" />
        <TopCategoryCard title="" highlight="5%" subtitle="вклад в цели" />
        <TopCategoryCard title="Транспорт" subtitle="частая трата" />
      </div>

      <BottomNavBar />
    </div>
  );
};

export default StatisticScreen;
