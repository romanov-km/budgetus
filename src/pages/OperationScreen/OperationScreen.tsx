import React, { useState } from "react";
import "./OperationScreen.scss";
import Icon from "../../components/ui/Icon";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { useNavigate } from "react-router-dom";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import { useTransactions } from "../../context/TransactionContext";
import { groupTransactionsByDate } from "../../utils/groupTransactionsByDate";


const OperationScreen: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Все операции");
  const [filterMonth, setFilterMonth] = useState("Все карты");
  const { transactions } = useTransactions();
  

  // Категории из localStorage
  const storedCategories = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );

  const bankOptions = Array.from(
    new Set(transactions.map((tx) => tx.bank))
  );
  const allBankOptions = ["Все карты", ...bankOptions];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesType = filter === "Все операции" || tx.type === filter;
    const matchesBank = filterMonth === "Все карты" || tx.bank === filterMonth;
    return matchesType && matchesBank;
  });
  const grouped = groupTransactionsByDate(filteredTransactions);

  return (
    <div className="statistic-screen">
      <div className="statistic-screen__header">
        <button className="back-button" onClick={() => navigate("/home")}>
          <Icon name="chevron-left" />
        </button>
        <div className="statistic-screen__progress">
          <h1 className="statistic-screen__title">Операции</h1>
        </div>
      </div>

      <div className="statistic-screen__main">
        <FilterSelect
          options={["Все операции", "Доход", "Расход"]}
          value={filter}
          onChange={setFilter}
        />
        <FilterSelect
          options={allBankOptions}
          value={filterMonth}
          onChange={setFilterMonth}
        />
      </div>

      <div className="statistic-screen__analys">
        <h2 className="section-title">История</h2>
      </div>

      <div className="statistic-screen__analys">
        <div className="history-list">
        {Object.entries(grouped).map(([dateLabel, items]) => (
  <div key={dateLabel} className="transaction-group">
    <div className="transaction-date-header">{dateLabel}</div>
    {items.map((tx) => {
      const meta = storedCategories.find((cat: any) => cat.name === tx.category) || {
        icon: "shopping-cart",
        color: "#ccc",
      };

      return (
        <div key={tx.id} className="transaction-item">
          <div className="icon" style={{ backgroundColor: meta.color }}>
            <Icon name={meta.icon} />
          </div>
          <div className="transaction-details">
            <div className="transaction-category">{tx.category}</div>
            <div className="transaction-bank">{tx.bank}</div>
          </div>
          <div className="transaction-amount">
            {tx.type === "Расход" ? "-" : "+"}{" "}
            {Number(tx.amount).toLocaleString()} ₽
          </div>
        </div>
      );
    })}
  </div>
))}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default OperationScreen;
