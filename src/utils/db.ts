import { openDB } from "idb";

const DB_NAME = "budgetus";
const DB_VERSION = 1;

export const initDB = async () => {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("categories")) {
        db.createObjectStore("categories", {
          keyPath: "name", // имя категории — уникальный ключ
        });
      }
    },
  });
};
