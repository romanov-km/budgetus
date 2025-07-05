import { formatDate } from "./formatDate";

type Transaction = {
  id: string;
  date: string;
  [key: string]: any;
};

export const groupTransactionsByDate = (transactions: Transaction[]) => {
  const groups: Record<string, Transaction[]> = {};

  transactions.forEach((tx) => {
    const label = formatDate(tx.date);
    if (!groups[label]) groups[label] = [];
    groups[label].push(tx);
  });

  return groups;
};
