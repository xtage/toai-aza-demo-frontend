"use client";
import { useEffect } from "react";

export default function ChatbotToggle() {
  useEffect(() => {
    const button = document.getElementById("toqi-widget-send-button");
    const wrapper = document.getElementById("toqi-chatbot-wrapper");

    button?.addEventListener("click", () => {
      if (wrapper)
        wrapper.style.display = wrapper.style.display === "none" ? "block" : "none";
    });
  }, []);

  return null;
}
