"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  selectedSubCategory: string | null;
  setSelectedSubCategory: (category: string | null) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedSubCategory, setSelectedSubCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
