"use client";
import { useEffect } from "react";

export default function ChatbotToggle() {
  useEffect(() => {
    const button = document.getElementById("toqi-widget-send-button");
    const wrapper = document.getElementById("toqi-chatbot-wrapper");
    const closeButton = document.getElementById("close-toqi-button");

    button?.addEventListener("click", () => {
      if (wrapper)
        wrapper.style.display = wrapper.style.display === "none" ? "block" : "none";
    });
    closeButton?.addEventListener("click", () => {
      if (wrapper)
        wrapper.style.display = "none";
    })
  }, []);

  return null;
}
