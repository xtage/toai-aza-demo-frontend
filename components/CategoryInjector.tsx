"use client";
import { useEffect } from "react";
import { useCategory } from "@/context/CategoryContext";

export default function CategoryInjector() {
  const { selectedSubCategory } = useCategory();

  useEffect(() => {
    // Expose the category ID globally for your chatbot script
    window.CATEGORY_ID = selectedSubCategory || "";
  }, [selectedSubCategory]);

  return null; // this component doesn’t render anything visible
}
