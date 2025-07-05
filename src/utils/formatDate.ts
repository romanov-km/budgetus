export const formatDate = (isoString: string): string => {
    const txDate = new Date(isoString);
    const now = new Date();
  
    const isToday =
      txDate.getDate() === now.getDate() &&
      txDate.getMonth() === now.getMonth() &&
      txDate.getFullYear() === now.getFullYear();
  
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
  
    const isYesterday =
      txDate.getDate() === yesterday.getDate() &&
      txDate.getMonth() === yesterday.getMonth() &&
      txDate.getFullYear() === yesterday.getFullYear();
  
    if (isToday) return "Сегодня";
    if (isYesterday) return "Вчера";
  
    return txDate.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    }); // например: 5 июля
  };
  