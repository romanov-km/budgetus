import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Transaction } from "../mock/mockData";
import { v4 as uuidv4 } from "uuid";

type TransactionContextType = {
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, "id">) => void;
};

const TransactionContext = createContext<TransactionContextType>({
  transactions: [],
  addTransaction: () => {},
});

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  const addTransaction = (tx: Omit<Transaction, "id">) => {
    const newTx = { ...tx, id: uuidv4() };
    const updated = [...transactions, newTx];
    setTransactions(updated);
    localStorage.setItem("transactions", JSON.stringify(updated));
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
